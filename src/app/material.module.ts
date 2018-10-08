import { NgModule } from "@angular/core";

import { MatSidenavModule, MatIconModule, MatToolbarModule,
            MatButtonModule, MatListModule
 } from '@angular/material'

@NgModule({
    imports : [MatSidenavModule, MatIconModule, MatToolbarModule,
                MatButtonModule, MatListModule
    ],
    exports : [MatSidenavModule, MatIconModule, MatToolbarModule,
                MatButtonModule, MatListModule
    ]
})

export class MaterialModule {  }