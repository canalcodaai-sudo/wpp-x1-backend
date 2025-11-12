// dialogue.js - VERSÃO CORRIGIDA (3 Botões + Imagens Inseridas)

const BASE_URL = 'https://whatsapp-backend-vott.onrender.com';

const dialogue = {
  // Estado 1: Início
  START: {
    messages: [
      { type: 'text', content: 'Oiee, tudo bem? Muito prazer amor, me chamo Milla, tenho 23 aninhos!!!', delay: 1000 },
      // ATENÇÃO: Baixar e hospedar áudio 1
      { type: 'audio', content: BASE_URL + '/audios/audio_milla_01.mp3', delay: 1000 },
      { type: 'text', content: 'Posso te falar mais amor?', delay: 3000 }
    ],
    response: {
      type: 'buttons',
      options: [
        { text: "Pode Sim!", payload: "CAN_CONTINUE", next: 'STEP_2_INTRO' }
      ]
    }
  },

  // Estado 2: Intro + Imagens
  STEP_2_INTRO: {
    messages: [
      // ATENÇÃO: Baixar e hospedar áudio 2
      { type: 'audio', content: BASE_URL + '/audios/audio_milla_02.mp3', delay: 4000 },
      
      // --- IMAGEM 1 INSERIDA ---
      { type: 'image', content: 'https://i.imgur.com/v5GSg9V.jpeg', delay: 1000 },
      
      { type: 'text', content: 'Comigo você não perde nunca bb ta?', delay: 4000 },
      { type: 'text', content: 'Vou te mandar a última amostrinha pra vc ver o que tem no meu conteúdo hein', delay: 1000 },
      
      // --- IMAGEM 2 INSERIDA ---
      { type: 'image', content: 'https://i.imgur.com/gCermtU.jpeg', delay: 1000 },
      
      { type: 'text', content: 'Então amor estou pedindo só uma ajudinha para poder pagar minha FACULDADE. Você vai me ajudar hoje?', delay: 1000 }
    ],
    response: {
      type: 'buttons',
      options: [
        { text: "SIM, VOU", payload: "WILL_HELP", next: 'STEP_3_PROMO' }
      ]
    }
  },

  // Estado 3: Promo Exclusivo
  STEP_3_PROMO: {
    messages: [
      // ATENÇÃO: Baixar e hospedar áudio 3
      { type: 'audio', content: BASE_URL + '/audios/audio_milla_03.mp3', delay: 1000 },
      { type: 'text', content: 'Mas eu preciso saber se você realmente tem interesse em meus conteúdos EXCLUSIVOS que eu fiz recentemente...🔞😈  ', delay: 1000 }
    ],
    response: {
      type: 'buttons',
      options: [
        { text: "Quero sim ver você no EXCLUSIVO", payload: "WANT_EXCLUSIVE", next: 'STEP_4_EXCLUSIVE' }
      ]
    }
  },

  // Estado 4: Botões de Preço (APENAS OS 3 ORIGINAIS)
  STEP_4_EXCLUSIVE: {
    messages: [
      { type: 'text', content: 'Você não vai se arrepender de me ver toda peladinha e dando o cuzinho 🔥  ', delay: 2000 },
      
      // --- ATENÇÃO: IMAGEM 3 AINDA FALTA ---
      { type: 'image', content: 'URL_DA_IMAGEM_3_AQUI', delay: 1000 },
      
      { type: 'text', content: 'Agora só você escolher qual dos PACOTINHOS você quer e CLICAR NO BOTÃO ABAIXO 👇🏻... ', delay: 4000 }
    ],
    response: {
      type: 'buttons',
      options: [
        // Botão 1 (Original)
        { text: "5 FOTOS E 7 VÍDEOS R$ 10,00", payload: "SELECT_10", next: 'REDIRECT_10' },
        
        // Botão 2 (Original)
        { text: "20 FOTOS + 25 VÍDEOS + CHAMADA DE VÍDEO 19,00", payload: "SELECT_17", next: 'REDIRECT_17' },
        
        // Botão 3 (Original)
        { text: "TODO O MEU CONTEÚDO + CHAMADA DE VÍDEO 49,00", payload: "SELECT_49", next: 'REDIRECT_49' }
      ]
    }
  },

  // --- ESTADOS DE REDIRECT ---

  REDIRECT_10: {
    action: {
      type: 'redirect',
      url: 'https://wa.me/5592984779395?text=Quero%20comprar%20o%20pack%20de%2010%20reais%20amorzinho'
    }
  },

  REDIRECT_17: {
    action: {
      type: 'redirect',
      url: 'https://wa.me/5592984779395?text=Quero%20comprar%20o%20pack%20de%2019%20reais%20amorzinho'
    }
  },

  REDIRECT_49: {
    action: {
      type: 'redirect',
      url: 'https://wa.me/5592984779395?text=Quero%20comprar%20o%20pack%20de%2049%20reais%20amorzinho'
    }
  }
  // O REDIRECT_97 FOI REMOVIDO
};

module.exports = dialogue;
