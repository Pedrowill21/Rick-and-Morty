


export function NumeroAleatorio(){
    const numAleatorio = Math.floor(Math.random() * 826)
    return numAleatorio
}

export function PegarPersonagem(){
    const numeroAleatorio = NumeroAleatorio();
    const url = `https://rickandmortyapi.com/api/character/${numeroAleatorio}`;
    return url
}

export async function PackCharacter(qtd = 3){
    const pack = []
   

    

    for(let i = 0; i < qtd; i++){

        let UrlPersonagem = PegarPersonagem();
        const res= await fetch(UrlPersonagem);
        const req = await res.json().then()
    
        let personagem = {
            name: req.name,
            image: req.image,
        }

        pack.push(personagem)

        

    }

    return pack



}