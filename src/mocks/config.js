export const mockResponse = {
  ok: true,
  errors: [],
  data: {
    config: {
      locale: 'en',
      logoPosition: 'right',
      pages: [
        {
          name: 'page1',
          elements: [
            {
              type: 'text',
              name: 'question1',
              title: {
                en: 'What is your name?',
                es: '¿Cuál es tu nombre?',
                fr: 'Quel est votre nom?',
              },
            },
            {
              type: 'multipletext',
              name: 'question2',
              title: {
                en: 'Provide additional information',
                es: 'Proporcione información adicional',
                fr: 'Fournir des informations supplémentaires',
              },
              items: [
                {
                  name: 'text1',
                  title: {
                    en: 'First text',
                    es: 'Primer texto',
                    fr: 'Premier texte',
                  },
                },
                {
                  name: 'text2',
                  title: {
                    en: 'Second text',
                    es: 'Segundo texto',
                    fr: 'Deuxième texte',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  }
}

