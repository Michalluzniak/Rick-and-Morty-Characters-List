export const statusColor = (status: string): string => {
  switch (status.toLowerCase()) {
    case 'alive':
      return 'success';
    case 'dead':
      return 'danger';
    case 'unknown':
      return 'warning';
    default:
      return 'primary';
  }
};
