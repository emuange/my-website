import content from "./content";

export function getAllContent() {
  return content;
}

export function getFeaturedContent() {
  return content.filter((item) => item.featured);
}

export function getContentBySlug(slug) {
  return content.find((item) => item.slug === slug);
}

export function getContentBySection(section) {
  return content.filter((item) => item.section === section);
}

export function getRelatedContent(currentItem, limit = 3) {
    if(!currentItem?.tags) return [];

    return content
        .filter((item) => item.id !== currentItem.id)
        .filter((item) => item.tags?.some((tag) => currentItem.tags.includes(tag))
    )
    .slice(0, limit);
}