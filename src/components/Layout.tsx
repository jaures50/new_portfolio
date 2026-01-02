import type { ReactNode } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Services from './Services';

interface LayoutProps {
    children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex">
                
                {/* Sidebar - Cachée sur mobile, visible sur desktop */}
                <div className="hidden lg:block w-64 xl:w-72 bg-white border-r border-gray-200">
                    <div className="p-6 sticky top-0 h-screen overflow-y-auto">
                        <Header />
                    </div>
                </div>

                {/* Contenu principal */}
                <div className="flex-1 w-full">
                    {/* Sections principales */}
                    <div className="w-full">
                        <Hero />
                        <About />
                        <Resume />
                        <Portfolio />
                        <Services />
                        <Contact />
                    </div>

                    {/* Contenu enfants optionnel */}
                    {children && (
                        <div className="px-4 lg:px-8 py-6 lg:py-8">
                            <div className="max-w-6xl mx-auto">
                                <div className="bg-white rounded-lg shadow-sm p-6">
                                    {children}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Layout;