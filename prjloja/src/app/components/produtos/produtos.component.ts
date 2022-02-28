import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produto = [{
    nome: '',
    preco: '',
    img: ''
  },
  {
    nome: '',
    preco: '',
    img: ''
  },
  {
    nome: '',
    preco: '',
    img: ''
  },
  {
    nome: '',
    preco: '',
    img: ''
  },
  {
    nome: '',
    preco: '',
    img: ''
  },
  {
    nome: '',
    preco: '',
    img: ''
  },
]


  constructor() { }

  ngOnInit(): void {
  }

}
