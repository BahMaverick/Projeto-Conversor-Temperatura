function verificar() {
    var pais = window.document.getElementById('pais')
    var res = window.document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    switch (pais.value.toLowerCase()) {
        case 'brasil':
            img.setAttribute('src', 'image/brasil.png')
            break
        case 'estados unidos':
            img.setAttribute('src', 'image/eua.png')
            break
        case 'japão':
            img.setAttribute('src', 'image/japão.png')  
            break 
        case 'itália':
            img.setAttribute('src', 'image/italia.png')
            break
        case 'índia':
            img.setAttribute('src', 'image/india.png')
            break
        case 'vietnã':
            img.setAttribute('src', 'image/vietna.png')
            break 
        case 'polônia':
            img.setAttribute('src', 'image/polonia.png')
            break
        case 'laos':
            img.setAttribute('src', 'image/laos.png')
            break
        case 'argentina':
            img.setAttribute('src', 'image/argentina.png')
            break
        case 'canadá': 
        img.setAttribute('src', 'image/canada.png')
        break
        case 'áfrica do sul':
            img.setAttribute('src', 'image/africasul.png')
            break
        case 'ruanda':
            img.setAttribute('src', 'image/ruanda.png')  
            break
        case 'alemanha':
            img.setAttribute('src', 'image/alemanha.png')
            break
        case 'somália':
            img.setAttribute('src', 'image/somalia.png')
            break
        case 'marrocos':
            img.setAttribute('src', 'image/marrocos.png')    
            break
        case 'frança': 
            img.setAttribute('src', 'image/frança.png')    
            break
        case 'chile':
            img.setAttribute('src', 'image/chile.png')
            break
        case 'uganda':
            img.setAttribute('src', 'image/uganda.png')
            break
        case 'turquia':
            img.setAttribute('src', 'image/turquia.png')
            break
        case 'portugal':
            img.setAttribute('src', 'image/portugal.png')
            break
        case 'porto rico':
            img.setAttribute('src', 'image/portorico.png')
            break
        case 'república dominicana':
            img.setAttribute('src', 'image/republicadominicana.png')
            break
        case 'haiti':
            img.setAttribute('src', 'image/haiti.png')
            break
        case 'méxico':
            img.setAttribute('src', 'image/mexico.png')
            break
        case 'líbano':
            img.setAttribute('src', 'image/libano.png')
            break
        case 'espanha':
            img.setAttribute('src', 'image/espanha.png')
            break
        case 'benin':
            img.setAttribute('src', 'image/benin.png')
            break
        case 'gana':
            img.setAttribute('src', 'image/gana.png')
            break
        case 'filipinas':
            img.setAttribute('src', 'image/filipinas.png')
            break
        case 'uruguai':
            img.setAttribute('src', 'image/uruguai.png')
            break
        case 'paraguai':
            img.setAttribute('src', 'image/paraguai.png')
            break
        case 'eslováquia':
            img.setAttribute('src', 'image/eslovaquia.png')
            break  
        case 'palestina':
            img.setAttribute('src', 'image/palestina.png') 
            break
        case 'bélgica':
            img.setAttribute('src', 'image/belgica.png')
            break
        case 'andorra':
            img.setAttribute('src', 'image/andorra.png')
            break
        case 'albânia':
            img.setAttribute('src', 'image/albania.png')   
            break
        case 'bielorrússia':
            img.setAttribute('src', 'image/bielorrussia.png')
            break 
        case 'bósnia e hezergovina':
            img.setAttribute('src', 'image/bosnia.png')
            break
        case 'croácia':
            img.setAttribute('src', 'image/croatia.png')
            break
        case 'bulgária':
            img.setAttribute('src', 'image/bulgaria.png')
            break
        case 'eslovênia':
            img.setAttribute('src', 'image/eslovenia.png')
            break
        case 'estônia':
            img.setAttribute('src', 'image/estonia.png')
            break
        case 'finlândia':
            img.setAttribute('src', 'image/finlandia.png')
            break
        case 'dinamarca':
            img.setAttribute('src', 'image/dinamarca.png')
            break
        case 'islândia':
            img.setAttribute('src', 'image/islandia.png')
            break
        case 'hungria':
            img.setAttribute('src', 'image/hungria.png')
            break
        case 'irlanda':
            img.setAttribute('src', 'image/irlanda.png')
            break
        case 'grécia':
            img.setAttribute('src', 'image/grecia.png')
            break                        
        case 'liechtenstein':
            img.setAttribute('src', 'image/liechtenstein.png')
            break
        case 'luxemburgo':
            img.setAttribute('src', 'image/luxemburgo.png')
            break
        case 'kosovo':
            img.setAttribute('src', 'image/kosovo.png')
            break
        case 'lituânia':
            img.setAttribute('src', 'image/lituania.png')
            break
        case 'letônia':
            img.setAttribute('src', 'image/lativia.png')
            break    
        case 'mônaco':
            img.setAttribute('src', 'image/monaco.png')
            break
        case 'moldávia':
            img.setAttribute('src', 'image/moldavia.png')
            break
        case 'macedónia':
            img.setAttribute('src', 'image/macedonia.png')
            break
        case 'malta':
            img.setAttribute('src', 'image/malta.png')
            break
        case 'montenegro':
            img.setAttribute('src', 'image/montenegro.png')
            break
        case 'reino unido':
            img.setAttribute('src', 'image/reinounido.png')
            break
        case 'países baixos':
            img.setAttribute('src', 'image/paisesbaixos.png')
            break
        case 'noruega':
            img.setAttribute('src', 'image/noruega.png')
            break
        case 'república tcheca':
            img.setAttribute('src', 'image/republicatcheca.png')
            break
        case 'rússia':
            img.setAttribute('src', 'image/russia.png')
            break
        case 'san marino':
            img.setAttribute('src', 'image/sanmarino.png')
            break
        case 'romênia':
            img.setAttribute('src', 'image/romenia.png')
            break
        case 'vaticano':
            img.setAttribute('src', 'image/vaticano.png')
            break
        case 'ucrânia':
            img.setAttribute('src', 'image/ucrania.png')
            break
        case 'sérvia':
            img.setAttribute('src', 'image/servia.png')
            break
        case 'suécia':
            img.setAttribute('src', 'image/suecia.png')
            break
        case 'suiça':
            img.setAttribute('src', 'image/suiça.png')
            break
        case 'china':
            img.setAttribute('src', 'image/china.png')
            break
        case 'armênia':
            img.setAttribute('src', 'image/armenia.png')
            break
        case 'arábia saudita':
            img.setAttribute('src', 'image/arabiasaudita.png')
            break
        case 'azerbaijão':
            img.setAttribute('src', 'image/azerbaijão.png')
            break
        case 'afeganistão':
            img.setAttribute('src', 'image/afeganistão.png')
            break
        case 'bahrein':
            img.setAttribute('src', 'image/bahrein.png')
            break
        case 'brunei':
            img.setAttribute('src', 'image/brunei.png')
            break
        case 'butão':
            img.setAttribute('src', 'image/butão.png')
            break
        case 'bangladesh':
            img.setAttribute('src', 'image/bangladesh.png')
            break
        case 'chipre':
            img.setAttribute('src', 'image/chipre.png')
            break
        case 'camboja':
            img.setAttribute('src', 'image/camboja.png')
            break
        case 'catar':
            img.setAttribute('src', 'image/catar.png')
            break
        case 'cazaquistão':
            img.setAttribute('src', 'image/cazaquistão.png')
            break
        case 'iêmen':
            img.setAttribute('src', 'image/iemen.png')
            break
        case 'emirados árabes unidos':
            img.setAttribute('src', 'image/emiradosarabes.png')
            break
        case 'geórgia':
            img.setAttribute('src', 'image/georgia.png')
            break
        case 'coreia do sul':
            img.setAttribute('src', 'image/coreiasul.png')
            break
        case 'coreia do norte':
            img.setAttribute('src', 'image/coreianorte.png')
            break
        case 'jordânia':
            img.setAttribute('src', 'image/jordania.png')
            break
        case 'israel':
            img.setAttribute('src', 'image/israel.png')
            break
        case 'irã':
            img.setAttribute('src', 'image/irã.jpg')
            break
        case 'japão':
            img.setAttribute('src', 'image/japão.png')
            break
        case 'iraque':
            img.setAttribute('src', 'image/iraque.png')
            break
        case 'indonésia':
            img.setAttribute('src', 'image/indonesia.png')
            break
        case 'maldivas':
            img.setAttribute('src', 'image/maldivas.png')
            break
        case 'mongólia':
            img.setAttribute('src', 'image/mongolia.png')
            break
        case 'malásia':
            img.setAttribute('src', 'image/malasia.png')
            break
        case 'nepal':
            img.setAttribute('src', 'image/nepal.png')
            break
        case 'omã':
            img.setAttribute('src', 'image/omã.png')
            break
        case 'sri lanka':
            img.setAttribute('src', 'image/srilanka.png')
            break
        case 'síria':
            img.setAttribute('src', 'image/siria.png')
            break
        case 'tailândia':
            img.setAttribute('src', 'image/tailandia.png')
            break
        case 'paquistão':
            img.setAttribute('src', 'image/paquistão.png')
            break
        case 'uzbequistão':
            img.setAttribute('src', 'image/uzbequistão.png')
            break
        case 'turcomenistão':
            img.setAttribute('src', 'image/turcomenistão.png')
            break
        case 'timor-leste':
            img.setAttribute('src', 'image/timorleste.png')
            break
        case 'tajiquistão':
            img.setAttribute('src', 'image/tajiquistão.png')
            break
        case 'taiwan':
            img.setAttribute('src', 'image/taiwan.png')
            break
        case 'angola':
            img.setAttribute('src', 'image/angola.png')
            break
        case 'burkina faso':
            img.setAttribute('src', 'image/burkinafaso.png')
            break
        case 'burundi':
            img.setAttribute('src', 'image/burundi.png')
            break
        case 'argélia':
            img.setAttribute('src', 'image/argelia.png')
            break
        case 'botswana':
            img.setAttribute('src', 'image/botswana.png')
            break
        case 'cabo verde':
            img.setAttribute('src', 'image/caboverde.png')
            break
        case 'egito':
            img.setAttribute('src', 'image/egito.png')
            break
        case 'djibouti':
            img.setAttribute('src', 'image/djibouti.png')
            break
        case 'chade':
            img.setAttribute('src', 'image/chade.png')
            break
        case 'costa do marfim':
            img.setAttribute('src', 'image/costadomarfim.png')
            break
        case 'comores':
            img.setAttribute('src', 'image/comores.png')
            break
        case 'camarões':
            img.setAttribute('src', 'image/camarões.png')
            break
        case 'eritreia':
            img.setAttribute('src', 'image/eritreia.png')
            break
        case 'etiópia':
            img.setAttribute('src', 'image/etiopia.png')
            break
        case 'essuatíni':
            img.setAttribute('src', 'image/essuatini.png')
            break
        case 'gabão':
            img.setAttribute('src', 'image/gabão.png')
            break
        case 'gâmbia':
            img.setAttribute('src', 'image/gambia.png')
            break
        case 'guiné':
            img.setAttribute('src', 'image/guine.png')
            break
        case 'guiné-bissau':
            img.setAttribute('src', 'image/guinebissau.png')
            break
        case 'guiné equatorial':
            img.setAttribute('src', 'image/guineequatorial.png')
            break
        case 'lesoto':
            img.setAttribute('src', 'image/lesoto.png')
            break
        case 'libéria':
            img.setAttribute('src', 'image/liberia.png')
            break
        case 'líbia':
            img.setAttribute('src', 'image/libia.jpg')
            break
        case 'madagascar':
            img.setAttribute('src', 'image/madagascar.png')
            break
        case 'malawi':
            img.setAttribute('src', 'image/malawi.png')
            break
        case 'mali':
            img.setAttribute('src', 'image/mali.png')
            break
        case 'maurícia':
            img.setAttribute('src', 'image/maurícia.png')
            break
        case 'mauritânia':
            img.setAttribute('src', 'image/mauritania.jpg')
            break
        case 'quênia':
            img.setAttribute('src', 'image/quenia.png')
            break
        case 'niger':
            img.setAttribute('src', 'image/niger.png')
            break
        case 'nigéria':
            img.setAttribute('src', 'image/nigeria.png')
            break
        case 'namíbia':
            img.setAttribute('src', 'image/namibia.png')
            break
        case 'moçambique':
            img.setAttribute('src', 'image/moçambique.png')
            break
        case 'república centro-africana':
            img.setAttribute('src', 'image/republicacentroafricana.png')
            break
        case 'república democrática do congo':
            img.setAttribute('src', 'image/republicademocraticadocongo.png')
            break
        case 'república do congo':
            img.setAttribute('src', 'image/republicadocongo.png')
            break
        case 'são tomé e príncipe':
            img.setAttribute('src', 'image/saotomeeprincipe.png')
            break
        case 'senegal':
            img.setAttribute('src', 'image/senegal.png')
            break
        case 'serra leoa':
            img.setAttribute('src', 'image/serraleoa.png')
            break
        case 'seychelles':
            img.setAttribute('src', 'image/seychelles.png')
            break
        case 'tunísia':
            img.setAttribute('src', 'image/tunisia.png')
            break
        case 'quirguistão':
            img.setAttribute('src', 'image/quirguistão.png')
            break
        case 'tanzânia':
            img.setAttribute('src', 'image/tanzania.png')
            break
        case 'sudão':
            img.setAttribute('src', 'image/sudão.png')
            break
        case 'sudão do sul':
            img.setAttribute('src', 'image/sudãodosul.png')
            break
        case 'antígua e barbuda':
            img.setAttribute('src', 'image/antiguaebarbuda.png')
            break
        case 'zâmbia':
            img.setAttribute('src', 'image/zambia.png')
            break
        case 'zimbábue':
            img.setAttribute('src', 'image/zimbabue.png')
            break
        case 'barbados':
            img.setAttribute('src', 'image/barbados.png')
            break
        case 'bahamas':
            img.setAttribute('src', 'image/bahamas.png')
            break
        case 'granada':
            img.setAttribute('src', 'image/granada.png')
            break
        case 'belize':
            img.setAttribute('src', 'image/belize.png')
            break
        case 'dominica':
            img.setAttribute('src', 'image/dominica.png')
            break
        case 'el salvador':
            img.setAttribute('src', 'image/elsalvador.png')
            break
        case 'costa rica':
            img.setAttribute('src', 'image/costarica.png')
            break
        case 'cuba':
            img.setAttribute('src', 'image/cuba.png')
            break
        case 'guatemala':
            img.setAttribute('src', 'image/guatemala.png')
            break
        case 'nicaraguá':
            img.setAttribute('src', 'image/nicaragua.png')
            break
        case 'república dominicana':
            img.setAttribute('src', 'image/republicadominicana.png')
            break
        case 'santa lúcia':
            img.setAttribute('src', 'image/santalucia.png')
            break
        case 'jamaica':
            img.setAttribute('src', 'image/jamaica.png')
            break
        case 'panamá':
            img.setAttribute('src', 'image/panama.png')
            break
        case 'honduras':
            img.setAttribute('src', 'image/honduras.png')
            break
        case 'são cristóvão e neves':
            img.setAttribute('src', 'image/saocristovaoeneves.png')
            break
        case 'são vicente e granadinas':
            img.setAttribute('src', 'image/saovicenteegranadinas.png')
            break
        case 'trindade e tobago':
            img.setAttribute('src', 'image/trindadeetobago.png')
            break
        case 'bolívia':
            img.setAttribute('src', 'image/bolivia.png')
            break
        case 'colômbia':
            img.setAttribute('src', 'image/colombia.png')
            break
        case 'venezuela':
            img.setAttribute('src', 'image/venezuela.png')
            break
        case 'equador':
            img.setAttribute('src', 'image/equador.png')
            break
        case 'guiana':
            img.setAttribute('src', 'image/guiana.png')
            break
        case 'peru':
            img.setAttribute('src', 'image/peru.png')
            break
        case 'suriname':
            img.setAttribute('src', 'image/suriname.png')
            break
        case 'austrália':
            img.setAttribute('src', 'image/australia.png')
            break
        case 'estados federados da micronésia':
            img.setAttribute('src', 'image/micronesia.png')
            break
        case 'ilhas marshall':
            img.setAttribute('src', 'image/marshall.png')
            break
        case 'fiji':
            img.setAttribute('src', 'image/fiji.png')
            break
        case 'kiribati':
            img.setAttribute('src', 'image/kiribati.png')
            break
        case 'ilhas salomão':
            img.setAttribute('src', 'image/salomao.png')
            break
        case 'tonga':
            img.setAttribute('src', 'image/tonga.png')
            break
        case 'samoa':
            img.setAttribute('src', 'image/samoa.png')
            break
        case 'nova zelândia':
            img.setAttribute('src', 'image/novazelandia.png')
            break
        case 'nauru':
            img.setAttribute('src', 'image/nauru.png')
            break
        case 'palau':
            img.setAttribute('src', 'image/palau.png')
            break
        case 'papua-nova guiné':
            img.setAttribute('src', 'image/papuanova.png')
            break
        case 'vanuatu':
            img.setAttribute('src', 'image/vanuatu.png')
            break
        case 'tuvalu':
            img.setAttribute('src', 'image/tuvalu.png')
            break


         

    }
    res.style.textAlign = 'center'
    res.appendChild(img)
}

//não consegui bandeira de mianmar(birmânia), singapura, benim, togo