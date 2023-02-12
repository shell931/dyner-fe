import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { BaseService } from 'src/app/services/base-service.service';
import { AccountStateService } from 'src/app/services/account-state.service';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  filesComplement: File[] = [];
  public validate_img: boolean = false;
  widthMin: number = 700;
  heightMin: number = 700;
  name_client: any;
  name_commerce: any;
  representante_legal: any;
  nit: any;
  file: any;
  avatar: any;

  checkboxesDataList: any = [];
  bankImage = environment.api.bankImage;

  constructor(
    private profileService: ProfileService,
    private baseService: BaseService,
    private AccountStateService: AccountStateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.profileService.GetProfileData().subscribe(
      (Alldata) => {
        this.GetProfileDataF(Alldata);
        this.AccountStateService.GetAllTransferBalance().subscribe((res) =>
          this.GetAllTransferBalanceF(res)
        );
      },
      (error) => {
        this.baseService.GetErrorAuthSesion(error);
      }
    );
  }

  GetProfileDataF(ProfileData) {
    console.log(ProfileData);
    this.name_commerce = ProfileData.data.user.client.nombre;
    this.representante_legal = ProfileData.data.user.client.representante_legal;
    this.nit = ProfileData.data.user.client.nit;
    this.avatar = ProfileData.data.user.client.avatar;
  }

  selectFileComplement(event) {
    this.validate_img = false;
    event.addedFiles.map((item) => {
      this.onValidatePixels(item).then((value) => {
        if (value) {
          this.filesComplement.push(item);
        } else {
          this.validate_img = true;
        }
      });
    });
  }

  onRemoveComplement(event) {
    this.filesComplement.splice(this.filesComplement.indexOf(event), 1);
  }

  onValidatePixels(file: File) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      if (file) {
        const img = new Image();
        img.src = window.URL.createObjectURL(file);
        reader.readAsDataURL(file);
        reader.onload = () => {
          const width = img.naturalWidth;
          const height = img.naturalHeight;
          window.URL.revokeObjectURL(img.src);
          if (width >= this.widthMin && height >= this.heightMin) {
            resolve(false);
          }
          resolve(true);
        };
      }
    });
  }

  GetAllTransferBalanceF(Alldata) {
    for (var i = 0; i < Alldata.data.bankAccounts.length; i++) {
      this.checkboxesDataList.push({
        id_cuenta: Alldata.data.bankAccounts[i].id_cuenta,
        num_cuenta: Alldata.data.bankAccounts[i].num_cuenta,
        isChecked: false,
        bank: Alldata.data.bankAccounts[i].bank,
      });
    }
  }

  submitbutton() {
    let count_images_to_upload = this.filesComplement.length;

    for (var i = 0; i < this.filesComplement.length; i++) {
      this.file = this.filesComplement[i];
    }

    if (count_images_to_upload > 0) {
      const formDataAvatar = new FormData();
      formDataAvatar.append('file', this.file);

      this.profileService.UpdateAvatar(formDataAvatar).subscribe(
        (result) => {
          console.log(result);
          window.location.reload();
          // this.router.navigate(['profile']).then(() => {
          // //     // this.show_spinner = false;
          // //     // window.location.reload();

          // });
        },
        (error) => console.log(error)
      );
    }
  }
}
