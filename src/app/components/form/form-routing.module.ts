import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdvancedFormComponent } from "./advanced-form/advanced-form.component";
import { FormEditorsComponent } from "./wysiwyg-editors/wysiwyg-editors.component";
import { FormElementsComponent } from "./form-elements/form-elements.component";
import { FormLayoutsComponent } from "./form-layouts/form-layouts.component";
import { FormSizesComponent } from "./form-sizes/form-sizes.component";
import { FormValidationComponent } from "./form-validation/form-validation.component";
import { FormWizardsComponent } from "./form-wizards/form-wizards.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'advanced-form', title:"Valex - Advanced Form",
                component: AdvancedFormComponent
            },
            {
                path: 'form-editors', title:"Valex - Form Editors",
                component: FormEditorsComponent
            },
            {
                path: 'form-elements', title:"Valex - Form Elements",
                component: FormElementsComponent
            },
            {
                path: 'form-layouts', title:"Valex - Form Layouts",
                component: FormLayoutsComponent
            },
            {
                path: 'form-validation', title:"Valex - Form Validation",
                component: FormValidationComponent
            },
            {
                path: 'form-wizards', title:"Valex - Form-wizards",
                component: FormWizardsComponent
            },
            {
                path: 'form-sizes', title:"Valex - Form Sizes",
                component: FormSizesComponent
            },
        ]
    }
];

@NgModule ({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}) 

export class FormRoutingModule {}