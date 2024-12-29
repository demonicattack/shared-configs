#!/usr/bin/env node

// Функция для определения значения `base`
export const determineBase = string_ => {
    const githubReference = process.env.GITHUB_REF ?? string_;

    if (!githubReference) return '/shared-configs/';

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
    try {
        const base = determineBase();
        // eslint-disable-next-line no-console
        console.log(base);
    } catch (error) {
        console.error('Ошибка при определении значения base:', error.message);
        process.exit(1);
    }
};

main();
