// dialogue.js - VERSÃO 100% COMPLETA E ATUALIZADA

// A BASE_URL ainda existe por causa da estrutura do seu arquivo,
// mas não estamos mais usando ela para os áudios, já que você mandou os links diretos.
const BASE_URL = 'https://wpp-x1-backend.onrender.com';

const dialogue = {
  // Estado 1: Início
  START: {
    messages: [
      { type: 'text', content: 'Oiee, tudo bem? Muito prazer amor, me chamo Milla, tenho 23 aninhos!!!', delay: 1000 },
      // --- ÁUDIO 1 INSERIDO ---
      { type: 'audio', content: 'https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/audio_milla_01.mp3', delay: 1000 },
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
      // --- ÁUDIO 2 INSERIDO ---
      { type: 'audio', content: 'https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/audio_milla_02.mp3', delay: 4000 },
      
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
      // --- ÁUDIO 3 INSERIDO ---
      { type: 'audio', content: 'https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/audio_milla_03.mp3', delay: 1000 },
      { type: 'text', content: 'Mas eu preciso saber se você realmente tem interesse em meus conteúdos EXCLUSIVOS que eu fiz recentemente...🔞😈  ', delay: 1000 }
    ],
    response: {
      type: 'buttons',
      options: [
        { text: "Quero sim ver você no EXCLUSIVO", payload: "WANT_EXCLUSIVE", next: 'STEP_4_EXCLUSIVE' }
      ]
    }
  },

  // Estado 4: Botões de Preço
  STEP_4_EXCLUSIVE: {
    messages: [
      { type: 'text', content: 'Você não vai se arrepender de me ver toda peladinha e dando o cuzinho 🔥  ', delay: 2000 },
      
      // --- IMAGEM 3 INSERIDA ---
      { type: 'image', content: 'https://i.imgur.com/1XZMjkC.png', delay: 1000 },
      
      { type: 'text', content: 'Agora só você escolher qual dos PACOTINHOS você quer e CLICAR NO BOTÃO ABAIXO 👇🏻... ', delay: 4000 }
    ],
    response: {
      type: 'buttons',
      options: [
        // Botão 1 (Original)
        { text: "5 FOTOS E 7 VÍDEOS R$ 10,00", payload: "SELECT_10", next: 'REDIRECT_10' },
        
        // Botão 2 (Original)
        { text: "20 FOTOS + 25 VÍDEOS + CHAMADA DE VÍDEO 17,00", payload: "SELECT_17", next: 'REDIRECT_17' },
        
        // Botão 3 (Original)
        { text: "TODO O MEU CONTEÚDO + CHAMADA DE VÍDEO 49,00", payload: "SELECT_49", next: 'REDIRECT_49' }
      ]
    }
  },

  // --- ESTADOS DE REDIRECT (links do WhatsApp) ---

  REDIRECT_10: {
    action: {
      type: 'redirect',
      url: 'https://wa.me/5592984779395?text=Quero%20comprar%20o%20pack%20de%2010%20reais%20amorzinho'
    }
  },

  REDIRECT_17: {
    action: {
      type: 'redirect',
      url: 'https://wa.me/5592984779395?text=Quero%20comprar%20o%20pack%20de%2017%20reais%20amorzinho'
    }
  },

  REDIRECT_49: {
    action: {
      type: 'redirect',
      url: 'https://wa.me/5592984779395?text=Quero%20comprar%20o%20pack%20de%2049%20reais%20amorzinho'
    }
  }
};

module.exports = dialogue;
