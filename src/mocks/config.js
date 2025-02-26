export const mockResponse = {
  ok: true,
  errors: [],
  data: {
    survey: {
      config: {
        logoPosition: 'right',
        pages: [
          {
            name: 'page1',
            elements: [
              {
                type: 'text',
                name: 'question1',
              },
              {
                type: 'multipletext',
                name: 'question2',
                items: [
                  {
                    name: 'text1',
                  },
                  {
                    name: 'text2',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  },
};
