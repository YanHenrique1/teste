import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produto = [{
    nome: 'Mouse RGB Red',
    preco: 'R$80,99',
    img: '../assets/images/Raptor OM.png'
  },
  {
    nome: 'Mouse RGB raptor',
    preco: 'R$75,99',
    img: '../assets/images/raptor mouse.png'
  },
  {
    nome: 'Mouse RGB green',
    preco: 'R$85,59',
    img: '../assets/images/mouse optico.png'
  },
  {
    nome: 'Mouse multi RGB colours',
    preco: 'R$118,99',
    img: '../assets/images/mouse dpi rgb.png'
  },
  {
    nome: 'Gabinete F05',
    preco: 'R$475,99',
    img: '../assets/images/gabinete-add4.png'
  },
  {
    nome: 'MT-G70',
    preco: 'R$430,99',
    img: '../assets/images/gabinete3.png'
  },
]


  constructor() { }

  ngOnInit(): void {
  }

}
