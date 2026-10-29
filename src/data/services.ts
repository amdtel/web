// Single source of truth for services. Add a new object here to add a new skill/page.
export interface Service {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  imageAlt: string;
  intro: string;
  items: string[];
  promo: string;
  booking: boolean; // true = shows preferred date field on enquiry form
}

export const services: Service[] = [
  {
    slug: 'property-maintenance',
    name: 'Property Maintenance',
    tagline: 'Small jobs, done properly – at home or at work.',
    image: '/images/property.jpg',
    imageAlt: 'Carpenter workshop tools',
    intro: 'The jobs that never reach the top of the list: a dripping tap, a sticking door, a shelf to hang. One reliable person for homes, rentals and commercial premises.',
    items: ['Odd jobs & repairs', 'Carpentry, shelving & fitting', 'Painting & touch-ups', 'Door, lock & window fixes', 'Landlord & commercial snagging lists', 'Flat-pack assembly'],
    promo: 'Got a list of little jobs? Bundle them into one visit and save on call-out time.',
    booking: true,
  },
  {
    slug: 'gardening',
    name: 'Gardening & Clearance',
    tagline: 'Tidy gardens, cleared plots, no mess left behind.',
    image: '/images/garden.jpg',
    imageAlt: 'Man mowing a lawn in a suburban garden',
    intro: 'From regular upkeep to a full overgrown-garden rescue, we keep outdoor spaces looking good and take the waste away.',
    items: ['Lawn mowing & edging', 'Hedge & shrub trimming', 'Overgrown garden clearance', 'Green waste removal', 'Fencing & shed repairs', 'Seasonal tidy-ups'],
    promo: 'Spring and autumn tidy-up slots fill fast – enquire early to book yours.',
    booking: true,
  },
  {
    slug: 'computer-repair',
    name: 'Computer Repair & Web Development',
    tagline: 'Fix it today, build it for tomorrow.',
    image: '/images/computers.jpg',
    imageAlt: 'Laptop motherboard being repaired',
    intro: 'Hands-on repair for slow, broken or virus-hit computers, plus simple, fast websites for small businesses and individuals.',
    items: ['Laptop & PC repair and upgrades', 'Virus & malware removal', 'Data backup & recovery', 'New-machine setup', 'Small business websites', 'Site updates & hosting help'],
    promo: 'Free diagnosis quote on any repair. Websites start with a no-obligation chat.',
    booking: false,
  },
  {
    slug: 'home-network',
    name: 'Home Network Install & Troubleshooting',
    tagline: 'Wi-Fi that works in every room.',
    image: '/images/network.jpg',
    imageAlt: 'Ethernet switch with cables',
    intro: 'Dropped connections, dead spots or a new build needing cabling? We design, install and fix home and small-office networks.',
    items: ['Wi-Fi dead-spot fixes', 'Router & mesh setup', 'Ethernet cabling & wall points', 'Smart device & printer connection', 'Slow-internet diagnosis', 'Basic network security'],
    promo: 'Wi-Fi health check: we test every room and tell you exactly what to change.',
    booking: true,
  },
];
