import { useState } from "react";
import { format, addDays } from "date-fns";
import { CalendarIcon, Users, MapPin, Minus, Plus, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const destinations = [
  "AnyPremium Dubai — Palm Jumeirah",
  "AnyPremium Paris — Place Vendôme",
  "AnyPremium New York — Central Park",
  "AnyPremium Tokyo — Ginza",
  "AnyPremium Sydney — Harbour",
  "AnyPremium Maldives — Private Island",
];

const suiteTypes = [
  "Ocean Penthouse Suite",
  "The Presidential Suite",
  "Grand Deluxe Suite",
  "Premier Ocean View Room",
];

interface BookingDialogProps {
  children: React.ReactNode;
  defaultDestination?: string;
  defaultSuite?: string;
}

const BookingDialog = ({ children, defaultDestination, defaultSuite }: BookingDialogProps) => {
  const [open, setOpen] = useState(false);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [destination, setDestination] = useState(defaultDestination || "");
  const [suite, setSuite] = useState(defaultSuite || "");
  const [adults, setAdults] = useState(2);
  const [children_, setChildren] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!checkIn || !checkOut || !destination || !suite) {
      toast({
        title: "Please complete all fields",
        description: "Select your destination, suite, check-in and check-out dates.",
        variant: "destructive",
      });
      return;
    }
    setSubmitted(true);
  };

  const handleClose = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      // Reset after close
      setTimeout(() => setSubmitted(false), 300);
    }
  };

  const minCheckOut = checkIn ? addDays(checkIn, 1) : addDays(new Date(), 1);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-border/50 bg-card sm:max-w-lg">
        {submitted ? (
          <div className="py-10 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-2 font-display text-2xl font-bold italic">Reservation Received</h2>
            <p className="mb-1 font-body text-lg text-muted-foreground">
              Thank you for choosing AnyPremium Hotels.
            </p>
            <p className="mb-6 font-body text-base text-muted-foreground">
              Our concierge team will confirm your booking within 24 hours.
            </p>
            <div className="mx-auto max-w-xs space-y-2 rounded-xl border border-border/50 bg-secondary/50 p-4 text-left">
              <p className="font-body text-sm text-muted-foreground">
                <span className="font-display text-xs font-semibold uppercase tracking-wider text-foreground">Destination:</span>{" "}
                {destination}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                <span className="font-display text-xs font-semibold uppercase tracking-wider text-foreground">Suite:</span>{" "}
                {suite}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                <span className="font-display text-xs font-semibold uppercase tracking-wider text-foreground">Dates:</span>{" "}
                {checkIn && format(checkIn, "MMM d, yyyy")} — {checkOut && format(checkOut, "MMM d, yyyy")}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                <span className="font-display text-xs font-semibold uppercase tracking-wider text-foreground">Guests:</span>{" "}
                {adults} adult{adults !== 1 ? "s" : ""}{children_ > 0 ? `, ${children_} child${children_ !== 1 ? "ren" : ""}` : ""}
              </p>
            </div>
            <button
              onClick={() => handleClose(false)}
              className="mt-8 rounded-full bg-gradient-gold px-8 py-3 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl font-bold italic">
                Reserve Your Stay
              </DialogTitle>
              <p className="font-body text-base text-muted-foreground">
                Select your destination and dates for a bespoke experience.
              </p>
            </DialogHeader>

            <div className="mt-4 space-y-5">
              {/* Destination */}
              <div>
                <label className="mb-2 block font-display text-xs font-semibold uppercase tracking-wider">
                  <MapPin className="mb-0.5 mr-1 inline h-3.5 w-3.5 text-primary" />
                  Destination
                </label>
                <Select value={destination} onValueChange={setDestination}>
                  <SelectTrigger className="h-12 border-border/50 bg-secondary/50 font-body text-base">
                    <SelectValue placeholder="Select a property" />
                  </SelectTrigger>
                  <SelectContent className="border-border/50 bg-card">
                    {destinations.map((d) => (
                      <SelectItem key={d} value={d} className="font-body text-base">
                        {d}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Suite */}
              <div>
                <label className="mb-2 block font-display text-xs font-semibold uppercase tracking-wider">
                  Suite Type
                </label>
                <Select value={suite} onValueChange={setSuite}>
                  <SelectTrigger className="h-12 border-border/50 bg-secondary/50 font-body text-base">
                    <SelectValue placeholder="Select a suite" />
                  </SelectTrigger>
                  <SelectContent className="border-border/50 bg-card">
                    {suiteTypes.map((s) => (
                      <SelectItem key={s} value={s} className="font-body text-base">
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-2 block font-display text-xs font-semibold uppercase tracking-wider">
                    <CalendarIcon className="mb-0.5 mr-1 inline h-3.5 w-3.5 text-primary" />
                    Check-in
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "h-12 w-full justify-start border-border/50 bg-secondary/50 font-body text-base",
                          !checkIn && "text-muted-foreground"
                        )}
                      >
                        {checkIn ? format(checkIn, "MMM d, yyyy") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto border-border/50 bg-card p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={(date) => {
                          setCheckIn(date);
                          if (date && checkOut && checkOut <= date) {
                            setCheckOut(addDays(date, 1));
                          }
                        }}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <label className="mb-2 block font-display text-xs font-semibold uppercase tracking-wider">
                    Check-out
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "h-12 w-full justify-start border-border/50 bg-secondary/50 font-body text-base",
                          !checkOut && "text-muted-foreground"
                        )}
                      >
                        {checkOut ? format(checkOut, "MMM d, yyyy") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto border-border/50 bg-card p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                        disabled={(date) => date < minCheckOut}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="mb-2 block font-display text-xs font-semibold uppercase tracking-wider">
                  <Users className="mb-0.5 mr-1 inline h-3.5 w-3.5 text-primary" />
                  Guests
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center justify-between rounded-lg border border-border/50 bg-secondary/50 px-4 py-3">
                    <span className="font-body text-sm text-muted-foreground">Adults</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-5 text-center font-display text-sm font-semibold">{adults}</span>
                      <button
                        onClick={() => setAdults(Math.min(6, adults + 1))}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-border/50 bg-secondary/50 px-4 py-3">
                    <span className="font-body text-sm text-muted-foreground">Children</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setChildren(Math.max(0, children_ - 1))}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-5 text-center font-display text-sm font-semibold">{children_}</span>
                      <button
                        onClick={() => setChildren(Math.min(4, children_ + 1))}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className="w-full rounded-full bg-gradient-gold py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                Request Reservation
              </button>

              <p className="text-center font-body text-xs text-muted-foreground">
                No payment required now. Our concierge will contact you to confirm.
              </p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
