import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Users, Plane, Minus, Plus, Check, ArrowRightLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const airports = [
  "New York (JFK)",
  "Los Angeles (LAX)",
  "Chicago (ORD)",
  "San Francisco (SFO)",
  "Miami (MIA)",
  "Seattle (SEA)",
  "London (LHR)",
  "Paris (CDG)",
  "Tokyo (NRT)",
  "Dubai (DXB)",
  "Sydney (SYD)",
  "Singapore (SIN)",
];

const cabinClasses = [
  "Economy",
  "Premium Economy",
  "Business Class",
  "First Class",
];

interface BookingDialogProps {
  children: React.ReactNode;
  defaultRoute?: string;
  defaultSuite?: string;
}

const BookingDialog = ({ children, defaultRoute, defaultSuite }: BookingDialogProps) => {
  const [open, setOpen] = useState(false);
  const [departure, setDeparture] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [from, setFrom] = useState(defaultRoute?.split(" → ")[0] || "");
  const [to, setTo] = useState(defaultRoute?.split(" → ")[1] || "");
  const [cabin, setCabin] = useState(defaultSuite || "");
  const [adults, setAdults] = useState(1);
  const [children_, setChildren] = useState(0);
  const [tripType, setTripType] = useState<"roundtrip" | "oneway">("roundtrip");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!departure || !from || !to || !cabin) {
      toast({
        title: "Please complete all fields",
        description: "Select your airports, cabin class, and travel date.",
        variant: "destructive",
      });
      return;
    }
    if (from === to) {
      toast({
        title: "Invalid route",
        description: "Departure and arrival airports must be different.",
        variant: "destructive",
      });
      return;
    }
    setSubmitted(true);
  };

  const handleClose = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setTimeout(() => setSubmitted(false), 300);
    }
  };

  const swapAirports = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-border/50 bg-card sm:max-w-lg">
        {submitted ? (
          <div className="py-10 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-2 font-display text-2xl font-bold">Booking Confirmed!</h2>
            <p className="mb-1 font-body text-lg text-muted-foreground">
              Thank you for choosing AnyCompany Airlines.
            </p>
            <p className="mb-6 font-body text-base text-muted-foreground">
              Your e-ticket and confirmation details will be sent to your email.
            </p>
            <div className="mx-auto max-w-xs space-y-2 rounded-xl border border-border/50 bg-secondary/50 p-4 text-left">
              <p className="font-body text-sm text-muted-foreground">
                <span className="font-display text-xs font-semibold uppercase tracking-wider text-foreground">Route:</span>{" "}
                {from} → {to}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                <span className="font-display text-xs font-semibold uppercase tracking-wider text-foreground">Class:</span>{" "}
                {cabin}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                <span className="font-display text-xs font-semibold uppercase tracking-wider text-foreground">Departure:</span>{" "}
                {departure && format(departure, "MMM d, yyyy")}
                {tripType === "roundtrip" && returnDate && ` — ${format(returnDate, "MMM d, yyyy")}`}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                <span className="font-display text-xs font-semibold uppercase tracking-wider text-foreground">Passengers:</span>{" "}
                {adults} adult{adults !== 1 ? "s" : ""}{children_ > 0 ? `, ${children_} child${children_ !== 1 ? "ren" : ""}` : ""}
              </p>
            </div>
            <button
              onClick={() => handleClose(false)}
              className="mt-8 rounded-full bg-gradient-sky px-8 py-3 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl font-bold">
                Book a Flight
              </DialogTitle>
              <p className="font-body text-base text-muted-foreground">
                Search and book flights to destinations worldwide.
              </p>
            </DialogHeader>

            <div className="mt-4 space-y-5">
              {/* Trip Type */}
              <div className="flex gap-2">
                <button
                  onClick={() => setTripType("roundtrip")}
                  className={cn(
                    "rounded-full px-4 py-1.5 font-display text-xs font-semibold transition-all",
                    tripType === "roundtrip"
                      ? "bg-primary text-primary-foreground"
                      : "border border-border/50 text-muted-foreground hover:text-foreground"
                  )}
                >
                  Round Trip
                </button>
                <button
                  onClick={() => setTripType("oneway")}
                  className={cn(
                    "rounded-full px-4 py-1.5 font-display text-xs font-semibold transition-all",
                    tripType === "oneway"
                      ? "bg-primary text-primary-foreground"
                      : "border border-border/50 text-muted-foreground hover:text-foreground"
                  )}
                >
                  One Way
                </button>
              </div>

              {/* From / To */}
              <div className="relative">
                <div className="grid grid-cols-[1fr,auto,1fr] items-end gap-2">
                  <div>
                    <label className="mb-2 block font-display text-xs font-semibold uppercase tracking-wider">
                      <Plane className="mb-0.5 mr-1 inline h-3.5 w-3.5 text-primary" />
                      From
                    </label>
                    <Select value={from} onValueChange={setFrom}>
                      <SelectTrigger className="h-12 border-border/50 bg-secondary/50 font-body text-base">
                        <SelectValue placeholder="Departure" />
                      </SelectTrigger>
                      <SelectContent className="border-border/50 bg-card">
                        {airports.map((a) => (
                          <SelectItem key={a} value={a} className="font-body text-base">{a}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <button
                    onClick={swapAirports}
                    className="mb-1 flex h-10 w-10 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    <ArrowRightLeft className="h-4 w-4" />
                  </button>

                  <div>
                    <label className="mb-2 block font-display text-xs font-semibold uppercase tracking-wider">
                      To
                    </label>
                    <Select value={to} onValueChange={setTo}>
                      <SelectTrigger className="h-12 border-border/50 bg-secondary/50 font-body text-base">
                        <SelectValue placeholder="Arrival" />
                      </SelectTrigger>
                      <SelectContent className="border-border/50 bg-card">
                        {airports.map((a) => (
                          <SelectItem key={a} value={a} className="font-body text-base">{a}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Cabin */}
              <div>
                <label className="mb-2 block font-display text-xs font-semibold uppercase tracking-wider">
                  Cabin Class
                </label>
                <Select value={cabin} onValueChange={setCabin}>
                  <SelectTrigger className="h-12 border-border/50 bg-secondary/50 font-body text-base">
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent className="border-border/50 bg-card">
                    {cabinClasses.map((c) => (
                      <SelectItem key={c} value={c} className="font-body text-base">{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Dates */}
              <div className={cn("grid gap-3", tripType === "roundtrip" ? "grid-cols-2" : "grid-cols-1")}>
                <div>
                  <label className="mb-2 block font-display text-xs font-semibold uppercase tracking-wider">
                    <CalendarIcon className="mb-0.5 mr-1 inline h-3.5 w-3.5 text-primary" />
                    Departure
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "h-12 w-full justify-start border-border/50 bg-secondary/50 font-body text-base",
                          !departure && "text-muted-foreground"
                        )}
                      >
                        {departure ? format(departure, "MMM d, yyyy") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto border-border/50 bg-card p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={departure}
                        onSelect={(date) => {
                          setDeparture(date);
                          if (date && returnDate && returnDate <= date) {
                            setReturnDate(undefined);
                          }
                        }}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {tripType === "roundtrip" && (
                  <div>
                    <label className="mb-2 block font-display text-xs font-semibold uppercase tracking-wider">
                      Return
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "h-12 w-full justify-start border-border/50 bg-secondary/50 font-body text-base",
                            !returnDate && "text-muted-foreground"
                          )}
                        >
                          {returnDate ? format(returnDate, "MMM d, yyyy") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto border-border/50 bg-card p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={returnDate}
                          onSelect={setReturnDate}
                          disabled={(date) => date < (departure || new Date())}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                )}
              </div>

              {/* Passengers */}
              <div>
                <label className="mb-2 block font-display text-xs font-semibold uppercase tracking-wider">
                  <Users className="mb-0.5 mr-1 inline h-3.5 w-3.5 text-primary" />
                  Passengers
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
                        onClick={() => setAdults(Math.min(9, adults + 1))}
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
                        onClick={() => setChildren(Math.min(8, children_ + 1))}
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
                className="w-full rounded-full bg-gradient-sky py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                Search Flights
              </button>

              <p className="text-center font-body text-xs text-muted-foreground">
                Flexible booking — free changes up to 24 hours before departure.
              </p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
