import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import Input from '../components/common/input/input.vue';
import {ref} from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Input',
  component: Input,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
  },
  args: {
    disabled: false,
    error: false,
    label: 'Test Label',
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

export const Example: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      return {
        args ,
        modelValue1: ref(''),
        modelValue2: ref(''),
        modelValue3: ref('disabled text'),
        error: false
      };
    },
    template: `
      <div style="display: flex; gap: 20px;">
      <Input
          v-model="modelValue1"
          label="Test Label"
          placeholder="Введите текст"
          :disabled="false"
          :error="error"
          :errorMessage="error ? 'Поле обязательно для заполнения' : null"
      />
      <Input
          v-model="modelValue2"
          label="Test Label"
          placeholder="Введите текст"
          :disabled="false"
          :error="true"
          :errorMessage="true ? 'Поле обязательно для заполнения' : null"
      />
      <Input
          v-model="modelValue3"
          label="Test Label"
          placeholder="Введите текст"
          :disabled="true"
          :error="error"
          :errorMessage="error ? 'Поле обязательно для заполнения' : null"
      />
      </div>`,
  }),
};

