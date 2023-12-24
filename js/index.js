var bombas = [];
var casillas;
var tam = 16;
var objetivo = "";

document.oncontextmenu = function () { return false }

function generarTablero(num, e) {
    e.target.className = "btn active selected"
    tam = num;
    var elementosCasilla = '<div class="tablero' + num + '">';
    for (let i = 1; i <= (tam * tam); i++) {
        elementosCasilla += '<div class="casilla" title="0" onclick="revelar(event)" oncontextmenu="colocarBandera(event)" id="' + i + '"></div>';
    }

    document.getElementById("marco").innerHTML = elementosCasilla + '</div>';
    colocarBombas();
}

function colocarBombas() {
    bombas = [];
    casillas = document.getElementsByClassName("casilla");

    while (bombas.length < tam) {
        var numeroAleatorio = Math.floor(Math.random() * (tam * tam));
        var existe = false;
        for (var i = 0; i < bombas.length; i++) {
            if (bombas[i] == numeroAleatorio) {
                existe = true;
                break;
            }
        }
        if (!existe) {
            bombas[bombas.length] = numeroAleatorio;
            casillas[numeroAleatorio].title = "1";
        }

    }
}

function cambiarObjetivo(nombre) {
    objetivo = nombre;
    document.getElementById("marco").className = "tablero explotada" + objetivo;
}

function colocarBandera(e) {
    var casilla = e.target;
    if (casilla.className == "casilla bandera") {
        casilla.className = "casilla";
    } else {
        casilla.className = "casilla bandera";
    }
}

function revelar(e) {
    var casilla = e.target;
    var id = e.target.id - 1;
    var bombasCerca = 0;
    if (casillas[casilla.id - 1].title == "1") {
        casilla.className = "casilla explotada" + objetivo;
        document.getElementById("marco").innerHTML = "Perdiste :(";
        document.getElementById("marco").className = "tablero explotada" + objetivo;
    } else {
        if (casilla.id % tam == 1) {
            if (casilla.id / tam <= 1) {
                //Lateral izquierdo arriba
                if (casillas[id + tam].title == 1) {
                    bombasCerca++;
                }
                if (casillas[id + tam + 1].title == 1) {
                    bombasCerca++;
                }
                if (casillas[id + 1].title == 1) {
                    bombasCerca++;
                }
            } else if (casilla.id / tam > 7) {
                //Lateral izquierdo abajo
                if (casillas[id - tam].title == 1) {
                    bombasCerca++;
                }
                if (casillas[id - tam + 1].title == 1) {
                    bombasCerca++;
                }
                if (casillas[id + 1].title == 1) {
                    bombasCerca++;
                }
            } else {
                //Lateral izquierdo
                if (casillas[id - tam].title == 1) {
                    bombasCerca++;
                }
                if (casillas[id - tam + 1].title == 1) {
                    bombasCerca++;
                }
                if (casillas[id + 1].title == 1) {
                    bombasCerca++;
                }
                if (casillas[id + tam].title == 1) {
                    bombasCerca++;
                }
                if (casillas[id + tam + 1].title == 1) {
                    bombasCerca++;
                }
            }
        } else if (casilla.id % tam == 0) {
            if (casilla.id / tam <= 1) {
                //Lateral derecho arriba
                if (casillas[id - 1].title == 1) {
                    bombasCerca++;
                }
                if (casillas[id + tam].title == 1) {
                    bombasCerca++;
                }
                if (casillas[id + tam - 1].title == 1) {
                    bombasCerca++;
                }
            } else if (casilla.id / tam > 7) {
                //Lateral derecho abajo
                if (casillas[id - tam].title == 1) {
                    bombasCerca++;
                }
                if (casillas[id - tam - 1].title == 1) {
                    bombasCerca++;
                }
                if (casillas[id - 1].title == 1) {
                    bombasCerca++;
                }
            } else {
                //Lateral derecho
                if (casillas[id - tam].title == 1) {
                    bombasCerca++;
                }
                if (casillas[id - tam - 1].title == 1) {
                    bombasCerca++;
                }
                if (casillas[id - 1].title == 1) {
                    bombasCerca++;
                }
                if (casillas[id + tam].title == 1) {
                    bombasCerca++;
                }
                if (casillas[id + tam - 1].title == 1) {
                    bombasCerca++;
                }
            }
        } else if (casilla.id / tam <= 1) {
            //Arriba centro
            if (casillas[id - 1].title == 1) {
                bombasCerca++;
            }
            if (casillas[id + 1].title == 1) {
                bombasCerca++;
            }
            if (casillas[id + tam].title == 1) {
                bombasCerca++;
            }
            if (casillas[id + tam - 1].title == 1) {
                bombasCerca++;
            }
            if (casillas[id + tam + 1].title == 1) {
                bombasCerca++;
            }
        }
        else if (casilla.id / tam > 7) {
            //Abajo centro
            if (casillas[id - 1].title == 1) {
                bombasCerca++;
            }
            if (casillas[id + 1].title == 1) {
                bombasCerca++;
            }
            if (casillas[id - tam].title == 1) {
                bombasCerca++;
            }
            if (casillas[id - tam - 1].title == 1) {
                bombasCerca++;
            }
            if (casillas[id - tam + 1].title == 1) {
                bombasCerca++;
            }
        } else {
            if (casillas[id - 1].title == 1) {
                bombasCerca++;
            }
            if (casillas[id + 1].title == 1) {
                bombasCerca++;
            }
            if (casillas[id - tam].title == 1) {
                bombasCerca++;
            }
            if (casillas[id - tam - 1].title == 1) {
                bombasCerca++;
            }
            if (casillas[id - tam + 1].title == 1) {
                bombasCerca++;
            }
            if (casillas[id + tam].title == 1) {
                bombasCerca++;
            }
            if (casillas[id + tam - 1].title == 1) {
                bombasCerca++;
            }
            if (casillas[id + tam + 1].title == 1) {
                bombasCerca++;
            }
        }
        casilla.innerHTML = bombasCerca;
        casilla.className = "casilla peligro" + bombasCerca;
    }
}