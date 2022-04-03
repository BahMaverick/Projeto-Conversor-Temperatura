const listaFilmes = ["https://upload.wikimedia.org/wikipedia/en/b/b6/Lagaan.jpg", "https://m.media-amazon.com/images/I/914B-x4mnrL._AC_SY879_.jpg", "http://dicasdecinema.net/wp-content/uploads/2013/09/9fM2yTi.jpg"]


for (var  i = 0; i < listaFilmes.length; i++) {
    document.write("<img src='" + listaFilmes[i] + "'>");
}

