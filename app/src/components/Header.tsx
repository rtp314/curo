'use client';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Volunteers', href: '#' },
  { name: 'Documents', href: '#' },
  { name: 'Calendar', href: '#' },
];

export function Header() {
  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between lg:px-8">
        <div className="flex">
          <a href="#" className=" p-1.5">
            <span className="sr-only">Curo</span>
            <img alt="" src="/images/curo-logo.svg" className="h-8 w-auto" />
          </a>
        </div>
        <div className="flex gap-x-12">
          {navigation.map(item => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
