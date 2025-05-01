
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

interface ServiceDetailProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: number;
    title: string;
    description: string;
    image: string;
    features: string[];
  };
}

export function ServiceDetailDialog({ isOpen, onClose, service }: ServiceDetailProps) {
  const [open, setOpen] = useState(isOpen);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  
  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    if (!open) onClose();
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[625px] p-0 overflow-hidden">
          <div className="aspect-video w-full relative">
            <img
              src={service.image}
              alt={service.title}
              className="object-cover w-full h-full"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder.svg";
              }}
            />
          </div>
          <DialogHeader className="px-6 pt-4">
            <DialogTitle className="text-2xl font-bold">{service.title}</DialogTitle>
            <DialogDescription className="text-foreground/80">
              {service.description}
            </DialogDescription>
          </DialogHeader>
          <div className="px-6 pb-6">
            <h4 className="font-medium text-green mb-3">Service Includes:</h4>
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-green mt-2 mr-3"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 flex justify-end">
              <a
                href="#contact"
                className="inline-block px-6 py-2 btn-primary bg-green hover:bg-green-dark"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  onClose();
                }}
              >
                Request Service
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={handleOpenChange}>
      <DrawerContent>
        <div className="aspect-video w-full relative">
          <img
            src={service.image}
            alt={service.title}
            className="object-cover w-full h-48"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/placeholder.svg";
            }}
          />
        </div>
        <DrawerHeader className="px-6 pt-4">
          <DrawerTitle className="text-2xl font-bold">{service.title}</DrawerTitle>
          <DrawerDescription className="text-foreground/80">
            {service.description}
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-6 pb-6">
          <h4 className="font-medium text-green mb-3">Service Includes:</h4>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-green mt-2 mr-3"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 flex justify-center">
            <a
              href="#contact"
              className="inline-block px-6 py-3 w-full text-center btn-primary bg-green hover:bg-green-dark"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                onClose();
              }}
            >
              Request Service
            </a>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
