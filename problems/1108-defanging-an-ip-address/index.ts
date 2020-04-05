function defangIPaddr(address: string): string {
  return address.replace(/\./g, '[.]');
}

export default defangIPaddr;
