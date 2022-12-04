const files = import.meta.glob('../../essays/*.md', { import: '__pageData', eager: true });

export const posts = Object.values(files).map(({ relativePath, frontmatter }) => ({
  ...frontmatter,
  date: formatDate(frontmatter.date),
  href: `/${relativePath.replace(/\.md$/, '.html')}`,
}));

function formatDate(date) {
  date = new Date(date);
  date.setUTCHours(12);
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }),
  };
}
