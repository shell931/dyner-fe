import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { BaseService } from 'src/app/services/base-service.service';
import { AccountStateService } from 'src/app/services/account-state.service';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    filesComplement: File[] = [];
    public validate_img: boolean = false;
    widthMin: Number = 700;
    heightMin: Number = 700;
    name_client: any;
    name_commerce: any;
    representante_legal: any;
    nit: any;
    file: any;
    avatar: any;

    paymentMethods = [
        { id: 1, name: 'Tarjeta de crédito', img: 'https://img-app-v1.s3.us-east-1.amazonaws.com/img_gateway/cards.svg', selected: false },
        { id: 2, name: 'Débito Bancario PSE', img: 'https://img-app-v1.s3.us-east-1.amazonaws.com/img_gateway/pse.svg', selected: false },
        { id: 3, name: 'Pago en efectivo', img: 'https://img-app-v1.s3.us-east-1.amazonaws.com/img_gateway/apostar_susuerte_group.svg', selected: false },
        { id: 4, name: 'Pago en corresponsales bancarios', img: 'https://img-app-v1.s3.us-east-1.amazonaws.com/img_gateway/bancos_2.svg', selected: false },
        { id: 5, name: 'Bancolombia', img: 'https://img-app-v1.s3.us-east-1.amazonaws.com/img_gateway/bancolombia_logo.svg', selected: false },
        { id: 6, name: 'Nequi', img: 'https://img-app-v1.s3.us-east-1.amazonaws.com/img_gateway/nequi_logo.svg', selected: false },
        { id: 7, name: 'Daviplata', img: 'https://img-app-v1.s3.us-east-1.amazonaws.com/img_gateway/daviplata_mini.svg', selected: false },
        { id: 8, name: 'Dale', img: 'https://img-app-v1.s3.us-east-1.amazonaws.com/img_gateway/dale_mini_2.svg', selected: false },
        { id: 9, name: 'Lulo', img: 'https://img-app-v1.s3.us-east-1.amazonaws.com/img_gateway/lulo_mini.svg', selected: false },
        { id: 10, name: 'RappiPay', img: 'https://img-app-v1.s3.us-east-1.amazonaws.com/img_gateway/rappi_pay_mini_2.svg', selected: false },
        { id: 11, name: 'Movii', img: 'https://img-app-v1.s3.us-east-1.amazonaws.com/img_gateway/movii_moni_2.svg', selected: false },
    ];

    checkboxesDataList: any = [];
    bankImage = environment.api.bankImage;

    constructor(
        private profileService: ProfileService,
        private baseService: BaseService,
        private AccountStateService: AccountStateService,
        private router: Router
    ) { }

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
        this.loadActivePaymentMethods();
    }

    loadActivePaymentMethods() {
        this.profileService.getPaymentMethodsActive().subscribe(
            activeMethods => {
                const activeIds = new Set(activeMethods.map(method => method.id_payment_method));
                this.paymentMethods = this.paymentMethods.map(pm => ({
                    ...pm,
                    selected: activeIds.has(pm.id)
                }));
            },
            error => {
                console.error('Error al obtener los métodos de pago activos:', error);
            }
        );
    }

    GetProfileDataF(ProfileData) {
        this.name_commerce = ProfileData.data.user.client.nombre;
        this.representante_legal = ProfileData.data.user.client.representante_legal;
        this.nit = ProfileData.data.user.client.nit;
        this.avatar = ProfileData.data.user.client.avatar;
    }

    /* selectFileComplement(event) {
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
    } */
    selectFileComplement(event) {
        if (this.filesComplement.length == 0) {
            this.filesComplement.push(...event.addedFiles);
        }
    }

    onRemoveComplement(event) {
        this.filesComplement.splice(this.filesComplement.indexOf(event), 1);
    }

    /* onValidatePixels(file: File) {
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
            if (height >= this.heightMin || width >= this.widthMin) {
              resolve(true);
            }
            resolve(false);
          };
        }
      });
    } */

    onValidatePixels(file: File) {
        return new Promise((resolve, reject) => {
            const Img = new Image();
            Img.src = URL.createObjectURL(file);
            Img.onload = (e: any) => {
                console.log(e);
                const height = e.path[0].height;
                const width = e.path[0].width;
                if (height >= this.heightMin || width >= this.widthMin) {
                    resolve(true);
                }
                resolve(false);
            };
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

    // submitbutton() {
    //     const selectedMethods = this.paymentMethods
    //         .filter(m => m.selected)
    //         .map(m => m.id);
    //     const requestPayload = {
    //         payment_methods: selectedMethods
    //     };
    //     this.profileService.updateMethodPaymentsClient(requestPayload).subscribe(
    //         (result) => {
    //             let count_images_to_upload = this.filesComplement.length;
    //             for (var i = 0; i < this.filesComplement.length; i++) {
    //                 this.file = this.filesComplement[i];
    //             }
    //             if (count_images_to_upload > 0) {
    //                 const formDataAvatar = new FormData();
    //                 formDataAvatar.append('file', this.file);

    //                 this.profileService.UpdateAvatar(formDataAvatar).subscribe(
    //                     (result) => {
    //                         console.log(result);
    //                         window.location.reload();
    //                     },
    //                     (error) => console.log(error)
    //                 );
    //             }else{
    //                 window.location.reload();
    //             }
    //         },
    //         (error) => console.log(error)
    //     );
    // }

    submitbutton() {
        const selectedMethods = this.paymentMethods
            .filter(m => m.selected)
            .map(m => m.id);
        const requestPayload = {
            payment_methods: selectedMethods
        };

        this.profileService.updateMethodPaymentsClient(requestPayload).pipe(
            switchMap((result) => {
                let count_images_to_upload = this.filesComplement.length;
                if (count_images_to_upload > 0) {
                    const formDataAvatar = new FormData();
                    formDataAvatar.append('file', this.filesComplement[this.filesComplement.length - 1]); // Si deseas enviar sólo el último archivo

                    return this.profileService.UpdateAvatar(formDataAvatar);
                } else {
                    // Si no hay imágenes que cargar, emite un valor usando 'of' para completar la cadena de observables
                    return of(null);
                }
            })
        ).subscribe(
            (result) => {
                console.log(result);
                window.location.reload();
            },
            (error) => {
                console.error('Error en las operaciones de actualización:', error);
                window.location.reload();
            }
        );
    }


}
