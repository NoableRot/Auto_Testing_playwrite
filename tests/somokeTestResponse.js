import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://response-form.herokuapp.com/todomvc');
  await page.goto('https://response-form.herokuapp.com/');
  await page.getByPlaceholder('как вас зовут?').click();
  await page.getByPlaceholder('как вас зовут?').fill('Тест');
  await page.getByPlaceholder('как вас зовут?').press('Enter');
  await page.getByPlaceholder('как вас зовут?').click();
  await page.getByPlaceholder('как вас зовут?').fill('');
  await page.getByRole('button', { name: 'отправить отзыв' }).click();
});
