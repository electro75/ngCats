import { NgModule } from "@angular/core";

import { MatSidenavModule, MatIconModule, MatToolbarModule,
            MatButtonModule
 } from '@angular/material'

@NgModule({
    imports : [MatSidenavModule, MatIconModule, MatToolbarModule,
                MatButtonModule
    ],
    exports : [MatSidenavModule, MatIconModule, MatToolbarModule,
                MatButtonModule
    ]
})

export class MaterialModule {  }