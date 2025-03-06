
import { defineStore } from 'pinia';

export enum LANGUAGES {
  English = 'English',
  Spanish = 'Spanish',
  French = 'French',
}

// Mapping LANGUAGES to SurveyJS locale codes
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
    surveyLocale: (state) => SURVEY_LOCALES[state.language], // Get SurveyJS-compatible locale
  },
  actions: {
    setLanguage(lang: LANGUAGES) {
      this.language = lang;
    },
  },
});

