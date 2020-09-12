export default function autoSuggestion(list, limit) {
  return list?.length > limit ? list.slice(0, limit) : list;
}
