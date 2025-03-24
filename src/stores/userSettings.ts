
import { defineStore } from 'pinia';

export enum LANGUAGES {
  English = 'English',
  Spanish = 'Spanish',
  French = 'French',
}

const SURVEY_LOCALES: Record<LANGUAGES, string> = {
  [LANGUAGES.English]: 'en',
  [LANGUAGES.Spanish]: 'es',
  [LANGUAGES.French]: 'fr',
};

export const useUserSettingsStore = defineStore('userSettings', {
  state: () => ({
    language: LANGUAGES.English,
  }),
  getters: {
    surveyLocale: (state) => SURVEY_LOCALES[state.language],
  },
  actions: {
    setLanguage(lang: LANGUAGES) {
      this.language = lang;
    },
  },
});

