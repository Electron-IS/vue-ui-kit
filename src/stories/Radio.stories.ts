import type { Meta, StoryObj } from '@storybook/vue3';

import RadioButton from '../components/common/radio/radio-button.vue';
import RadioGroup from '../components/common/radio/radio-group.vue';

import {ref} from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/RadioGroup',
  component: RadioGroup,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
  args: {
    disabled: false,
    label: 'Test Label',
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

export const Example: Story = {
  render: (args) => ({
    components: { RadioGroup, RadioButton },
    setup() {
      return {
        args ,
        selectedOption: ref(''),
        disabled: ref(false)
      };
    },
    template: `
      <div style="display: flex; gap: 20px;">
      <RadioGroup v-model="selectedOption" :disabled="disabled">
        <RadioButton label="Телефон" value="Телефон" />
        <RadioButton label="Почта" value="Почта" />
        <RadioButton label="Личный сайт" value="Личный сайт" />
        <RadioButton label="Telegram" value="Telegram" />
        <RadioButton label="WhatsApp" value="WhatsApp" />
        <RadioButton label="Instagram" value="Instagram" />
        <RadioButton label="VK" value="VK" />
        <RadioButton label="Одноклассники" value="Одноклассники" />
      </RadioGroup>
      
      Выбрано: {{selectedOption}}
      </div>`,
  }),
};

