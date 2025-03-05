import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import AddButton from '../components/common/add-button/add-button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'Example/AddButton',
    component: AddButton,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['outline', 'primary'] },
        size: { control: 'select', options: ['small', 'medium', 'large'] },
        disabled: { control: 'boolean' },
    },
    args: {
        variant: 'primary',
        // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
        onClick: fn(),
    },
} satisfies Meta<typeof AddButton>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

export const Example: Story = {
    render: (args) => ({
        components: { AddButton },
        setup() {
            return {
                args,
                onAddAction: () => {
                    console.log('onAddAction');
                },
                onDeleteAction: () => {
                    console.log('onDeleteAction');
                }
            };
        },
        template: `
      <div style="display: flex; gap: 20px; height: 400px">
          <AddButton
              addLabel="Добавить элемент"
              deleteLabel="Удалить элемент"
              @addAction="onAddAction"
              @deleteAction="onDeleteAction"
          />
      </div>`,
    }),
};

