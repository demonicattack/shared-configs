#!/usr/bin/env node

// Функция для определения значения `base`
export const determineBase = (stringReference = process.env.GITHUB_REF) => {
    // eslint-disable-next-line no-console
    // console.log('GITHUB_REF:', process.env.GITHUB_REF);

    const githubReference = process.env.GITHUB_REF ?? stringReference;

    // if (!githubReference) return '/shared-configs/';

    // eslint-disable-next-line prefer-named-capture-group
    const prMatch = githubReference.match(/^refs\/pull\/(\d+)(\/head)?$/);
    if (prMatch) {
        const prNumber = prMatch[1];
        return `/pr/${prNumber}/`;
    }

    return '/shared-configs/';
};

// Главная функция
const main = () => {
    const githubReference = process.env.GITHUB_REF || '';
    // eslint-disable-next-line no-console
    console.log('@GITHUB_REF:', githubReference); // Выводим для проверки
    const base = determineBase(githubReference);
    // eslint-disable-next-line no-console
    console.log('@base', base); // Возвращаем результат
};

main();
