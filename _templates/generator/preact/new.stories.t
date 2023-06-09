---
to: src/components/preact/<%= name %>/<%= name %>.stories.js
---
/** @jsxImportSource preact */
import { <%= name %> } from "./<%= name %>";
const meta = {
    title: "Example/<%= name %>",
    component: <%= name %>,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

export const Template = {};