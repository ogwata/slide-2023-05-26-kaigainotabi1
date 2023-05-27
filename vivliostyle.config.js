module.exports = {
  language: 'ja',
  title: 'slide-2023-05-26-kaigainotabi1', // populated into `publication.json`, default to `title` of the first entry or `name` in `package.json`.
  author: 'OGATA Katsuhiro <ogwata@vivliostyle.org>', // default to `author` in `package.json` or undefined.
  // language: 'ja', // default to undefined.
  // size: 'A4', // paper size.
  theme: 'themes/theme.css',
  entry: ['manuscript.md'],
  output: [
    'book.pdf',
    {
      path: './book',
      format: 'webpub',
    },
  ],
}
