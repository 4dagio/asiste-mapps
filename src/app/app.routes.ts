import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
    { path: 'location/:lat/:long/:service', component: HomeComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'location'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});