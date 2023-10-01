const botoesN = [4, 2, 1, 9, 6]

const botoes = document.getElementsByClassName('nome-da-classe-dos-botoes')

//aí na função que troca de anime, perceba que cada anime tem um índice que você mesmo vai definir, por exemplo: Naruto é 0, Pokemon é 1.... e por aí vai, então botoesN[0] são a quantidade de botões do Naruto, esse valor vamos chamar de ind
for(botao of botoes) {
  botao.style.display = 'none' //isso aqui é para resetar os botões
}
for(let i=0; i<ind; i++) {
  botoes[i].style.display = 'inline-block'
}

const data = [
    {
        "name": ['Yoichi Isagi', 'Meguru Bachira', 'Rin Itoshi', 'Shōei Barō', 'Seishirō Nagi'],
        "desc": [
            'Na maior parte do tempo, Ichigo parece um adolescente normal, a única exceção é seu cabelo espetado e laranja, uma característica que ele tem sido ridicularizado por anos. Ele é uma pessoa bastante alta e magra, com pele de pêssego e olhos castanhos. Quando em sua forma espiritual, Ichigo usa traje Shinigami padrão com a adição de uma alça em seu peito.',
            'O sobrenome de Zaraki vem do distrito em que ele residia, Zaraki, que é o distrito #80 do Beco Norte de Rukongai. Enquanto residia no Distrito #80, Kenpachi não tinha nome. Durante esse tempo, ele se tornou proficiente em esgrima e matou inúmeros inimigos.',
            'Kisuke Urahara sempre usa sandálias de madeira japonesas tradicionais e um bucket hat, o que lhe rendeu o apelido de "sandal-hat". Ele geralmente é um sujeito descontraído e jovial, embora possa estar morto quando a situação o justificar.',
            'Aizen é um intelectual educado e de fala mansa, muitas vezes se dirigindo a seus subordinados por seus nomes próprios. Ele raramente mostra qualquer sinal de alarme ou angústia e muitas vezes tem situações inteiras planejadas com bastante antecedência.',
            'Hitsugaya vem de Junrinan, Distrito 1 de Rukongai. Lá, ele morava com uma idosa, Momo Hinamori, e possivelmente outras pessoas. Pouco mais se sabe sobre seu passado, mas sabe-se que ele se tornou um Shinigami logo após Hinamori.',
            
        ],
        "tokens": ['1t.png', '2t.png', '3t.png', '4t.png', '5t.png'],
        "wpp": ['1w.png', '2w.png', '3w.png', '4w.png', '5w.png']
    },
    {
        "name": ['Yoichi Isagi', 'Meguru Bachira', 'Rin Itoshi', 'Shōei Barō', 'Seishirō Nagi'],
        "desc": [
            'Na maior parte do tempo, Ichigo parece um adolescente normal, a única exceção é seu cabelo espetado e laranja, uma característica que ele tem sido ridicularizado por anos. Ele é uma pessoa bastante alta e magra, com pele de pêssego e olhos castanhos. Quando em sua forma espiritual, Ichigo usa traje Shinigami padrão com a adição de uma alça em seu peito.',
            'O sobrenome de Zaraki vem do distrito em que ele residia, Zaraki, que é o distrito #80 do Beco Norte de Rukongai. Enquanto residia no Distrito #80, Kenpachi não tinha nome. Durante esse tempo, ele se tornou proficiente em esgrima e matou inúmeros inimigos.',
            'Kisuke Urahara sempre usa sandálias de madeira japonesas tradicionais e um bucket hat, o que lhe rendeu o apelido de "sandal-hat". Ele geralmente é um sujeito descontraído e jovial, embora possa estar morto quando a situação o justificar.',
            'Aizen é um intelectual educado e de fala mansa, muitas vezes se dirigindo a seus subordinados por seus nomes próprios. Ele raramente mostra qualquer sinal de alarme ou angústia e muitas vezes tem situações inteiras planejadas com bastante antecedência.',
            'Hitsugaya vem de Junrinan, Distrito 1 de Rukongai. Lá, ele morava com uma idosa, Momo Hinamori, e possivelmente outras pessoas. Pouco mais se sabe sobre seu passado, mas sabe-se que ele se tornou um Shinigami logo após Hinamori.',
            
        ],
        "tokens": ['1t.png', '2t.png', '3t.png', '4t.png', '5t.png', '6t.png', '7t.png', '8t.png', '9t.png'],
        "wpp": ['1w.png', '2w.png', '3w.png', '4w.png', '5w.png', '6w.png', '7w.png', '8w.png', '9w.png']
    },   
    {
        "name": ['Yoichi Isagi', 'Meguru Bachira', 'Rin Itoshi', 'Shōei Barō', 'Seishirō Nagi'],
        "desc": [
            'Na maior parte do tempo, Ichigo parece um adolescente normal, a única exceção é seu cabelo espetado e laranja, uma característica que ele tem sido ridicularizado por anos. Ele é uma pessoa bastante alta e magra, com pele de pêssego e olhos castanhos. Quando em sua forma espiritual, Ichigo usa traje Shinigami padrão com a adição de uma alça em seu peito.',
            'O sobrenome de Zaraki vem do distrito em que ele residia, Zaraki, que é o distrito #80 do Beco Norte de Rukongai. Enquanto residia no Distrito #80, Kenpachi não tinha nome. Durante esse tempo, ele se tornou proficiente em esgrima e matou inúmeros inimigos.',
            'Kisuke Urahara sempre usa sandálias de madeira japonesas tradicionais e um bucket hat, o que lhe rendeu o apelido de "sandal-hat". Ele geralmente é um sujeito descontraído e jovial, embora possa estar morto quando a situação o justificar.',
            'Aizen é um intelectual educado e de fala mansa, muitas vezes se dirigindo a seus subordinados por seus nomes próprios. Ele raramente mostra qualquer sinal de alarme ou angústia e muitas vezes tem situações inteiras planejadas com bastante antecedência.',
            'Hitsugaya vem de Junrinan, Distrito 1 de Rukongai. Lá, ele morava com uma idosa, Momo Hinamori, e possivelmente outras pessoas. Pouco mais se sabe sobre seu passado, mas sabe-se que ele se tornou um Shinigami logo após Hinamori.',
            
        ],
        "tokens": ['1t.png', '2t.png', '3t.png', '4t.png', '5t.png', '6t.png', '7t.png', '8t.png'],
        "wpp": ['1w.png', '2w.png', '3w.png', '4w.png', '5w.png', '6w.png', '7w.png', '8w.png']
    },
    {
        "name": ['Yoichi Isagi', 'Meguru Bachira', 'Rin Itoshi', 'Shōei Barō', 'Seishirō Nagi'],
        "desc": [
            'Na maior parte do tempo, Ichigo parece um adolescente normal, a única exceção é seu cabelo espetado e laranja, uma característica que ele tem sido ridicularizado por anos. Ele é uma pessoa bastante alta e magra, com pele de pêssego e olhos castanhos. Quando em sua forma espiritual, Ichigo usa traje Shinigami padrão com a adição de uma alça em seu peito.',
            'O sobrenome de Zaraki vem do distrito em que ele residia, Zaraki, que é o distrito #80 do Beco Norte de Rukongai. Enquanto residia no Distrito #80, Kenpachi não tinha nome. Durante esse tempo, ele se tornou proficiente em esgrima e matou inúmeros inimigos.',
            'Kisuke Urahara sempre usa sandálias de madeira japonesas tradicionais e um bucket hat, o que lhe rendeu o apelido de "sandal-hat". Ele geralmente é um sujeito descontraído e jovial, embora possa estar morto quando a situação o justificar.',
            'Aizen é um intelectual educado e de fala mansa, muitas vezes se dirigindo a seus subordinados por seus nomes próprios. Ele raramente mostra qualquer sinal de alarme ou angústia e muitas vezes tem situações inteiras planejadas com bastante antecedência.',
            'Hitsugaya vem de Junrinan, Distrito 1 de Rukongai. Lá, ele morava com uma idosa, Momo Hinamori, e possivelmente outras pessoas. Pouco mais se sabe sobre seu passado, mas sabe-se que ele se tornou um Shinigami logo após Hinamori.',
            
        ],
        "tokens": ['1t.png', '2t.png', '3t.png', '4t.png', '5t.png', '6t.png', '7t.png', '8t.png', '9t.png', '10t.png'],
        "wpp": ['1w.png', '2w.png', '3w.png', '4w.png', '5w.png', '6w.png', '7w.png', '8w.png']
    },
    {
        "name": ['Yoichi Isagi', 'Meguru Bachira', 'Rin Itoshi', 'Shōei Barō', 'Seishirō Nagi'],
        "desc": [
            'Na maior parte do tempo, Ichigo parece um adolescente normal, a única exceção é seu cabelo espetado e laranja, uma característica que ele tem sido ridicularizado por anos. Ele é uma pessoa bastante alta e magra, com pele de pêssego e olhos castanhos. Quando em sua forma espiritual, Ichigo usa traje Shinigami padrão com a adição de uma alça em seu peito.',
            'O sobrenome de Zaraki vem do distrito em que ele residia, Zaraki, que é o distrito #80 do Beco Norte de Rukongai. Enquanto residia no Distrito #80, Kenpachi não tinha nome. Durante esse tempo, ele se tornou proficiente em esgrima e matou inúmeros inimigos.',
            'Kisuke Urahara sempre usa sandálias de madeira japonesas tradicionais e um bucket hat, o que lhe rendeu o apelido de "sandal-hat". Ele geralmente é um sujeito descontraído e jovial, embora possa estar morto quando a situação o justificar.',
            'Aizen é um intelectual educado e de fala mansa, muitas vezes se dirigindo a seus subordinados por seus nomes próprios. Ele raramente mostra qualquer sinal de alarme ou angústia e muitas vezes tem situações inteiras planejadas com bastante antecedência.',
            'Hitsugaya vem de Junrinan, Distrito 1 de Rukongai. Lá, ele morava com uma idosa, Momo Hinamori, e possivelmente outras pessoas. Pouco mais se sabe sobre seu passado, mas sabe-se que ele se tornou um Shinigami logo após Hinamori.',
            
        ],
        "tokens": ['1t.png', '2t.png', '3t.png', '4t.png', '5t.png', '6t.png', '7t.png', '8t.png', '9t.png', '10t.png'],
        "wpp": ['1w.png', '2w.png', '3w.png', '4w.png', '5w.png', '6w.png', '7w.png', '8w.png']
    },
    {
        "name": ['Yoichi Isagi', 'Meguru Bachira', 'Rin Itoshi', 'Shōei Barō', 'Seishirō Nagi'],
        "desc": [
            'Na maior parte do tempo, Ichigo parece um adolescente normal, a única exceção é seu cabelo espetado e laranja, uma característica que ele tem sido ridicularizado por anos. Ele é uma pessoa bastante alta e magra, com pele de pêssego e olhos castanhos. Quando em sua forma espiritual, Ichigo usa traje Shinigami padrão com a adição de uma alça em seu peito.',
            'O sobrenome de Zaraki vem do distrito em que ele residia, Zaraki, que é o distrito #80 do Beco Norte de Rukongai. Enquanto residia no Distrito #80, Kenpachi não tinha nome. Durante esse tempo, ele se tornou proficiente em esgrima e matou inúmeros inimigos.',
            'Kisuke Urahara sempre usa sandálias de madeira japonesas tradicionais e um bucket hat, o que lhe rendeu o apelido de "sandal-hat". Ele geralmente é um sujeito descontraído e jovial, embora possa estar morto quando a situação o justificar.',
            'Aizen é um intelectual educado e de fala mansa, muitas vezes se dirigindo a seus subordinados por seus nomes próprios. Ele raramente mostra qualquer sinal de alarme ou angústia e muitas vezes tem situações inteiras planejadas com bastante antecedência.',
            'Hitsugaya vem de Junrinan, Distrito 1 de Rukongai. Lá, ele morava com uma idosa, Momo Hinamori, e possivelmente outras pessoas. Pouco mais se sabe sobre seu passado, mas sabe-se que ele se tornou um Shinigami logo após Hinamori.',
            
        ],
        "tokens": ['1t.png', '2t.png', '3t.png', '4t.png', '5t.png', '6t.png', '7t.png', '8t.png', '9t.png', '10t.png'],
        "wpp": ['1w.png', '2w.png', '3w.png', '4w.png', '5w.png', '6w.png', '7w.png', '8w.png']
    },
    {
        "name": ['Yoichi Isagi', 'Meguru Bachira', 'Rin Itoshi', 'Shōei Barō', 'Seishirō Nagi'],
        "desc": [
            'Na maior parte do tempo, Ichigo parece um adolescente normal, a única exceção é seu cabelo espetado e laranja, uma característica que ele tem sido ridicularizado por anos. Ele é uma pessoa bastante alta e magra, com pele de pêssego e olhos castanhos. Quando em sua forma espiritual, Ichigo usa traje Shinigami padrão com a adição de uma alça em seu peito.',
            'O sobrenome de Zaraki vem do distrito em que ele residia, Zaraki, que é o distrito #80 do Beco Norte de Rukongai. Enquanto residia no Distrito #80, Kenpachi não tinha nome. Durante esse tempo, ele se tornou proficiente em esgrima e matou inúmeros inimigos.',
            'Kisuke Urahara sempre usa sandálias de madeira japonesas tradicionais e um bucket hat, o que lhe rendeu o apelido de "sandal-hat". Ele geralmente é um sujeito descontraído e jovial, embora possa estar morto quando a situação o justificar.',
            'Aizen é um intelectual educado e de fala mansa, muitas vezes se dirigindo a seus subordinados por seus nomes próprios. Ele raramente mostra qualquer sinal de alarme ou angústia e muitas vezes tem situações inteiras planejadas com bastante antecedência.',
            'Hitsugaya vem de Junrinan, Distrito 1 de Rukongai. Lá, ele morava com uma idosa, Momo Hinamori, e possivelmente outras pessoas. Pouco mais se sabe sobre seu passado, mas sabe-se que ele se tornou um Shinigami logo após Hinamori.',
            
        ],
        "tokens": ['1t.png', '2t.png', '3t.png', '4t.png', '5t.png', '6t.png', '7t.png', '8t.png', '9t.png', '10t.png'],
        "wpp": ['1w.png', '2w.png', '3w.png', '4w.png', '5w.png', '6w.png', '7w.png', '8w.png']
    },    {
        "name": ['Yoichi Isagi', 'Meguru Bachira', 'Rin Itoshi', 'Shōei Barō', 'Seishirō Nagi'],
        "desc": [
            'Na maior parte do tempo, Ichigo parece um adolescente normal, a única exceção é seu cabelo espetado e laranja, uma característica que ele tem sido ridicularizado por anos. Ele é uma pessoa bastante alta e magra, com pele de pêssego e olhos castanhos. Quando em sua forma espiritual, Ichigo usa traje Shinigami padrão com a adição de uma alça em seu peito.',
            'O sobrenome de Zaraki vem do distrito em que ele residia, Zaraki, que é o distrito #80 do Beco Norte de Rukongai. Enquanto residia no Distrito #80, Kenpachi não tinha nome. Durante esse tempo, ele se tornou proficiente em esgrima e matou inúmeros inimigos.',
            'Kisuke Urahara sempre usa sandálias de madeira japonesas tradicionais e um bucket hat, o que lhe rendeu o apelido de "sandal-hat". Ele geralmente é um sujeito descontraído e jovial, embora possa estar morto quando a situação o justificar.',
            'Aizen é um intelectual educado e de fala mansa, muitas vezes se dirigindo a seus subordinados por seus nomes próprios. Ele raramente mostra qualquer sinal de alarme ou angústia e muitas vezes tem situações inteiras planejadas com bastante antecedência.',
            'Hitsugaya vem de Junrinan, Distrito 1 de Rukongai. Lá, ele morava com uma idosa, Momo Hinamori, e possivelmente outras pessoas. Pouco mais se sabe sobre seu passado, mas sabe-se que ele se tornou um Shinigami logo após Hinamori.',
            
        ],
        "tokens": ['1t.png', '2t.png', '3t.png', '4t.png', '5t.png', '6t.png', '7t.png', '8t.png', '9t.png', '10t.png'],
        "wpp": ['1w.png', '2w.png', '3w.png', '4w.png', '5w.png', '6w.png', '7w.png', '8w.png']
    },
    {
        "name": ['Yoichi Isagi', 'Meguru Bachira', 'Rin Itoshi', 'Shōei Barō', 'Seishirō Nagi'],
        "desc": [
            'Na maior parte do tempo, Ichigo parece um adolescente normal, a única exceção é seu cabelo espetado e laranja, uma característica que ele tem sido ridicularizado por anos. Ele é uma pessoa bastante alta e magra, com pele de pêssego e olhos castanhos. Quando em sua forma espiritual, Ichigo usa traje Shinigami padrão com a adição de uma alça em seu peito.',
            'O sobrenome de Zaraki vem do distrito em que ele residia, Zaraki, que é o distrito #80 do Beco Norte de Rukongai. Enquanto residia no Distrito #80, Kenpachi não tinha nome. Durante esse tempo, ele se tornou proficiente em esgrima e matou inúmeros inimigos.',
            'Kisuke Urahara sempre usa sandálias de madeira japonesas tradicionais e um bucket hat, o que lhe rendeu o apelido de "sandal-hat". Ele geralmente é um sujeito descontraído e jovial, embora possa estar morto quando a situação o justificar.',
            'Aizen é um intelectual educado e de fala mansa, muitas vezes se dirigindo a seus subordinados por seus nomes próprios. Ele raramente mostra qualquer sinal de alarme ou angústia e muitas vezes tem situações inteiras planejadas com bastante antecedência.',
            'Hitsugaya vem de Junrinan, Distrito 1 de Rukongai. Lá, ele morava com uma idosa, Momo Hinamori, e possivelmente outras pessoas. Pouco mais se sabe sobre seu passado, mas sabe-se que ele se tornou um Shinigami logo após Hinamori.',
            
        ],
        "tokens": ['1t.png', '2t.png', '3t.png', '4t.png', '5t.png', '6t.png', '7t.png', '8t.png', '9t.png', '10t.png'],
        "wpp": ['1w.png', '2w.png', '3w.png', '4w.png', '5w.png', '6w.png', '7w.png', '8w.png']
    },
    {
        "name": ['Yoichi Isagi', 'Meguru Bachira', 'Rin Itoshi', 'Shōei Barō', 'Seishirō Nagi'],
        "desc": [
            'Na maior parte do tempo, Ichigo parece um adolescente normal, a única exceção é seu cabelo espetado e laranja, uma característica que ele tem sido ridicularizado por anos. Ele é uma pessoa bastante alta e magra, com pele de pêssego e olhos castanhos. Quando em sua forma espiritual, Ichigo usa traje Shinigami padrão com a adição de uma alça em seu peito.',
            'O sobrenome de Zaraki vem do distrito em que ele residia, Zaraki, que é o distrito #80 do Beco Norte de Rukongai. Enquanto residia no Distrito #80, Kenpachi não tinha nome. Durante esse tempo, ele se tornou proficiente em esgrima e matou inúmeros inimigos.',
            'Kisuke Urahara sempre usa sandálias de madeira japonesas tradicionais e um bucket hat, o que lhe rendeu o apelido de "sandal-hat". Ele geralmente é um sujeito descontraído e jovial, embora possa estar morto quando a situação o justificar.',
            'Aizen é um intelectual educado e de fala mansa, muitas vezes se dirigindo a seus subordinados por seus nomes próprios. Ele raramente mostra qualquer sinal de alarme ou angústia e muitas vezes tem situações inteiras planejadas com bastante antecedência.',
            'Hitsugaya vem de Junrinan, Distrito 1 de Rukongai. Lá, ele morava com uma idosa, Momo Hinamori, e possivelmente outras pessoas. Pouco mais se sabe sobre seu passado, mas sabe-se que ele se tornou um Shinigami logo após Hinamori.',
            
        ],
        "tokens": ['1t.png', '2t.png', '3t.png', '4t.png', '5t.png', '6t.png', '7t.png', '8t.png', '9t.png', '10t.png'],
        "wpp": ['1w.png', '2w.png', '3w.png', '4w.png', '5w.png', '6w.png', '7w.png', '8w.png']
    },
    {
        "name": ['Yoichi Isagi', 'Meguru Bachira', 'Rin Itoshi', 'Shōei Barō', 'Seishirō Nagi'],
        "desc": [
            'Na maior parte do tempo, Ichigo parece um adolescente normal, a única exceção é seu cabelo espetado e laranja, uma característica que ele tem sido ridicularizado por anos. Ele é uma pessoa bastante alta e magra, com pele de pêssego e olhos castanhos. Quando em sua forma espiritual, Ichigo usa traje Shinigami padrão com a adição de uma alça em seu peito.',
            'O sobrenome de Zaraki vem do distrito em que ele residia, Zaraki, que é o distrito #80 do Beco Norte de Rukongai. Enquanto residia no Distrito #80, Kenpachi não tinha nome. Durante esse tempo, ele se tornou proficiente em esgrima e matou inúmeros inimigos.',
            'Kisuke Urahara sempre usa sandálias de madeira japonesas tradicionais e um bucket hat, o que lhe rendeu o apelido de "sandal-hat". Ele geralmente é um sujeito descontraído e jovial, embora possa estar morto quando a situação o justificar.',
            'Aizen é um intelectual educado e de fala mansa, muitas vezes se dirigindo a seus subordinados por seus nomes próprios. Ele raramente mostra qualquer sinal de alarme ou angústia e muitas vezes tem situações inteiras planejadas com bastante antecedência.',
            'Hitsugaya vem de Junrinan, Distrito 1 de Rukongai. Lá, ele morava com uma idosa, Momo Hinamori, e possivelmente outras pessoas. Pouco mais se sabe sobre seu passado, mas sabe-se que ele se tornou um Shinigami logo após Hinamori.',
            
        ],
        "tokens": ['1t.png', '2t.png', '3t.png', '4t.png', '5t.png', '6t.png', '7t.png', '8t.png', '9t.png', '10t.png'],
        "wpp": ['1w.png', '2w.png', '3w.png', '4w.png', '5w.png', '6w.png', '7w.png', '8w.png']
    }
]