export default function showUnsavedWarning() {
  return this.get('body').split(' ').length >= 5;
}
