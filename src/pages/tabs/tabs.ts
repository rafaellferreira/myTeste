import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  //declarar nova pagina aqui, sequencia de tab e numeracao seguido de Root
  // declarar import acima
  
  tab1Root = HomePage;
  tab4Root = FeedPage;

  constructor() {

  }
}
