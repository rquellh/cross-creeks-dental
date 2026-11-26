// Tappable phone and email links built from businessInfo
import businessInfo from '../data/businessInfo.json';

export const telHref = `tel:+1${businessInfo.phone.replace(/\D/g, '')}`;
export const mailtoHref = `mailto:${businessInfo.email}`;
