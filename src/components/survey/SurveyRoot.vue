<script lang="ts">
import { getLocaleStrings } from "survey-core";


const engLocale = getLocaleStrings("en");
engLocale.noEntriesReadonlyText = "Specify an employee name to edit details";

</script>
<template>
  <SurveyComponent :model="survey" />
</template>
<script setup lang="ts">
import { Model } from "survey-core";
import { SurveyComponent } from "survey-vue3-ui";
import { getLocaleStrings } from "survey-core";
import * as SurveyTheme from "survey-core/themes";
import "./index.css";
import { json } from "./json";

const survey = new Model(json);
survey.applyTheme(SurveyTheme.SharpLight);
survey.onComplete.add((sender, options) => {
  console.log(JSON.stringify(sender.data, null, 3));
});
</script>
