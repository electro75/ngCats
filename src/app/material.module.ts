import { NgModule } from "@angular/core";

import { MatSidenavModule, MatIconModule, MatToolbarModule,
            MatButtonModule, MatListModule, MatCardModule
 } from '@angular/material'

@NgModule({
    imports : [MatSidenavModule, MatIconModule, MatToolbarModule,
                MatButtonModule, MatListModule, MatCardModule
    ],
    exports : [MatSidenavModule, MatIconModule, MatToolbarModule,
                MatButtonModule, MatListModule, MatCardModule
    ]
})

export class MaterialModule {  }