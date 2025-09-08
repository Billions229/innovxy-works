You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
pricing-table.tsx
import React from 'react';
import { cn } from '@/lib/utils';
import { CheckIcon, LucideIcon, MinusIcon } from 'lucide-react';
import { Badge } from './badge';

function PricingTable({ className, ...props }: React.ComponentProps<'table'>) {
	return (
		<div
			data-slot="table-container"
			className="relative w-full overflow-x-auto"
		>
			<table className={cn('w-full text-sm', className)} {...props} />
		</div>
	);
}

function PricingTableHeader({ ...props }: React.ComponentProps<'thead'>) {
	return <thead data-slot="table-header" {...props} />;
}

function PricingTableBody({
	className,
	...props
}: React.ComponentProps<'tbody'>) {
	return (
		<tbody
			data-slot="table-body"
			className={cn('[&_tr]:divide-x [&_tr]:border-b', className)}
			{...props}
		/>
	);
}

function PricingTableRow({ ...props }: React.ComponentProps<'tr'>) {
	return <tr data-slot="table-row" {...props} />;
}

function PricingTableCell({
	className,
	children,
	...props
}: React.ComponentProps<'td'> & { children: boolean | string }) {
	return (
		<td
			data-slot="table-cell"
			className={cn('p-4 align-middle whitespace-nowrap', className)}
			{...props}
		>
			{children === true ? (
				<CheckIcon aria-hidden="true" className="size-4" />
			) : children === false ? (
				<MinusIcon
					aria-hidden="true"
					className="text-muted-foreground size-4"
				/>
			) : (
				children
			)}
		</td>
	);
}

function PricingTableHead({ className, ...props }: React.ComponentProps<'th'>) {
	return (
		<th
			data-slot="table-head"
			className={cn(
				'p-2 text-left align-middle font-medium whitespace-nowrap',
				className,
			)}
			{...props}
		/>
	);
}

function PricingTablePlan({
	name,
	badge,
	price,
	compareAt,
	icon: Icon,
	children,
	className,
	...props
}: React.ComponentProps<'div'> & PricingPlanType) {
	return (
		<div
			className={cn(
				'bg-background supports-[backdrop-filter]:bg-background/40 relative h-full overflow-hidden rounded-lg border p-3 font-normal backdrop-blur-xs',
				className,
			)}
			{...props}
		>
			<div className="flex items-center gap-2">
				<div className="flex items-center justify-center rounded-full border p-1.5">
					{Icon && <Icon className="h-3 w-3" />}
				</div>
				<h3 className="text-muted-foreground font-mono text-sm">{name}</h3>
				<Badge
					variant="secondary"
					className="ml-auto rounded-full border px-2 py-0.5 text-[10px] font-normal"
				>
					{badge}
				</Badge>
			</div>

			<div className="mt-4 flex items-baseline gap-2">
				<span className="text-3xl font-bold">{price}</span>
				{compareAt && (
					<span className="text-muted-foreground text-sm line-through">
						{compareAt}
					</span>
				)}
			</div>
			<div className="relative z-10 mt-4">{children}</div>
		</div>
	);
}

type PricingPlanType = {
	name: string;
	icon: LucideIcon;
	badge: string;
	price: string;
	compareAt?: string;
};

type FeatureValue = boolean | string;

type FeatureItem = {
	label: string;
	values: FeatureValue[];
};

export {
	type PricingPlanType,
	type FeatureValue,
	type FeatureItem,
	PricingTable,
	PricingTableHeader,
	PricingTableBody,
	PricingTableRow,
	PricingTableHead,
	PricingTableCell,
	PricingTablePlan,
};


demo.tsx
import React from 'react';
import { cn } from '@/lib/utils';
import { Shield, Users, Rocket } from 'lucide-react';
import {
	type FeatureItem,
	PricingTable,
	PricingTableBody,
	PricingTableHeader,
	PricingTableHead,
	PricingTableRow,
	PricingTableCell,
	PricingTablePlan,
} from '@/components/ui/pricing-table';
import { Button } from '@/components/ui/button';

export default function Page() {
	return (
		<div className="relative min-h-screen overflow-hidden px-4 py-20">
			<div
				className={cn(
					'absolute inset-0 z-[-10] size-full max-h-102 opacity-50',
					'[mask-image:radial-gradient(ellipse_at_center,var(--background),transparent)]',
				)}
				style={{
					backgroundImage:
						'radial-gradient(var(--foreground) 1px, transparent 1px)',
					backgroundSize: '32px 32px',
				}}
			/>
			<div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
				<h1
					className={cn(
						'text-3xl leading-tight font-bold text-balance sm:text-5xl',
					)}
				>
					{'Lighting Fast '}
					<i className="bg-gradient-to-r from-violet-500 via-violet-400 to-fuchsia-400 bg-clip-text font-serif font-extrabold text-transparent drop-shadow-[0_0_18px_rgba(167,139,250,0.55)]">
						{'Design Systems'}
					</i>
					<br />
					{'with '}
					<i className="bg-gradient-to-r from-violet-500 via-fuchsia-400 to-indigo-400 bg-clip-text font-serif font-extrabold text-transparent drop-shadow-[0_0_22px_rgba(167,139,250,0.75)]">
						{'Figr Identity'}
					</i>
				</h1>
				<p className="text-muted-foreground mt-4 max-w-2xl text-pretty">
					Deploy Consistent Designs Faster With Figr’s AI solutions.
				</p>
			</div>
			<Default />
		</div>
	);
}

function Default() {
	return (
		<PricingTable className="mx-auto my-5 max-w-5xl">
			<PricingTableHeader>
				<PricingTableRow>
					<th />
					<th className="p-1">
						<PricingTablePlan
							name="Solo"
							badge="For Freelancers"
							price="$29"
							compareAt="$59"
							icon={Shield}
						>
							<Button variant="outline" className="w-full rounded-lg" size="lg">
								Get Started
							</Button>
						</PricingTablePlan>
					</th>
					<th className="p-1">
						<PricingTablePlan
							name="teams"
							badge="For Growing Teams"
							price="$99"
							compareAt="$139"
							icon={Users}
							className="after:pointer-events-none after:absolute after:-inset-0.5 after:rounded-[inherit] after:bg-gradient-to-b after:from-violet-500/15 after:to-transparent after:blur-[2px]"
						>
							<Button
								className="w-full rounded-lg border-violet-700/60 bg-violet-600/80 text-white hover:bg-violet-600"
								size="lg"
							>
								Get Started
							</Button>
						</PricingTablePlan>
					</th>
					<th className="p-1">
						<PricingTablePlan
							name="scale"
							badge="For Large Teams"
							price="$239"
							compareAt="$299"
							icon={Rocket}
						>
							<Button variant="outline" className="w-full rounded-lg" size="lg">
								Get Started
							</Button>
						</PricingTablePlan>
					</th>
				</PricingTableRow>
			</PricingTableHeader>
			<PricingTableBody>
				{FEATURES.map((feature, index) => (
					<PricingTableRow key={index}>
						<PricingTableHead>{feature.label}</PricingTableHead>
						{feature.values.map((value, index) => (
							<PricingTableCell key={index}>{value}</PricingTableCell>
						))}
					</PricingTableRow>
				))}
			</PricingTableBody>
		</PricingTable>
	);
}

export const FEATURES: FeatureItem[] = [
	{
		label: 'Members',
		values: ['1', 'Up to 5', 'Unlimited'],
	},
	{
		label: 'Workspaces',
		values: ['1', 'Up to 3', 'Unlimited'],
	},
	{
		label: 'Guests',
		values: [true, true, true],
	},
	{
		label: 'Live collaboration',
		values: [false, true, true],
	},
	{
		label: 'Integrations of sub-brands',
		values: [false, true, true],
	},
	{
		label: 'Asset library',
		values: ['50 assets', '500 assets', 'Unlimited assets'],
	},
	{
		label: 'Export files',
		values: ['PNG only', 'PNG, PDF, MP4', 'PNG, PDF, MP4, JPEG'],
	},
	{
		label: 'Multiple dimensions',
		values: ['1:1', '1:1 and 9:16', 'All ratios & custom sizes'],
	},
	{
		label: 'Integrations & planning tools',
		values: [false, true, true],
	},
	{
		label: 'Dedicated account manager',
		values: [false, false, true],
	},
	{
		label: 'Access to help center',
		values: [true, true, true],
	},
	{
		label: 'Priority support',
		values: [false, 'Business hours', '24/7 priority'],
	},
	{
		label: 'Brand kit & custom colors',
		values: [false, true, true],
	},
	{
		label: 'Advanced analytics',
		values: [false, true, true],
	},
	{
		label: 'Storage space',
		values: ['1 GB', '20 GB', '1 TB'],
	},
	{
		label: 'User roles & permissions',
		values: [false, true, true],
	},
	{
		label: 'Custom integrations (API access)',
		values: [false, false, true],
	},
	{
		label: 'White-label option',
		values: [false, false, true],
	},
	{
		label: 'Training & onboarding sessions',
		values: [false, '1 session', 'Unlimited sessions'],
	},
];

```

Copy-paste these files for dependencies:
```tsx
shadcn/button
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

```
```tsx
shadcn/badge
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

```

Install NPM dependencies:
```bash
lucide-react, @radix-ui/react-slot, class-variance-authority
```

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them
