import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationService} from '../main/navigation.service';
import {faFilePdf} from '@fortawesome/free-solid-svg-icons';
import {SettingsService} from './settings.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy {

    pdfIcon = faFilePdf;

    constructor(
        private navigationService: NavigationService,
        private settingsService: SettingsService
    ) {
    }

    ngOnInit() {

        this.navigationService.showBackButton = true;
    }

    ngOnDestroy(): void {

        this.navigationService.showBackButton = false;
        this.settingsService.storeInLocalStorage();
    }
}