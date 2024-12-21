import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import Checkbox from '../components/common/checkbox/checkbox.vue';
import {ref} from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
  args: {
    disabled: false,
    label: 'Test Label',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

export const Example: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return {
        args ,
        modelValue1: ref(false),
        modelValue2: ref(false),
        modelValue3: ref(true),

        disabled: false
      };
    },
    template: `
      <div style="display: flex; gap: 20px;">
     <Checkbox v-model="modelValue1" label="Checkbox" />
     <Checkbox disabled v-model="modelValue2" label="Checkbox disabled" />
     <Checkbox disabled v-model="modelValue3" label="Disabled and checked" />
      </div>`,
  }),
};

