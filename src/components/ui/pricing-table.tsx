import React from 'react';
import { cn } from '@/lib/utils';
import { CheckIcon } from 'lucide-react';
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

function PricingTableHead({
	className,
	...props
}: React.ComponentProps<'th'>) {
	return (
		<th
			data-slot="table-head"
			className={cn(
				'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
				className
			)}
			{...props}
		/>
	);
}

function PricingTableCell({
	className,
	...props
}: React.ComponentProps<'td'>) {
	return (
		<td
			data-slot="table-cell"
			className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
			{...props}
		/>
	);
}

function PricingTableCaption({
	className,
	...props
}: React.ComponentProps<'caption'>) {
	return (
		<caption
			data-slot="table-caption"
			className={cn('mt-4 text-sm text-muted-foreground', className)}
			{...props}
		/>
	);
}

interface PricingCardProps {
	title: string;
	price: string;
	description?: string;
	features: string[];
	isPopular?: boolean;
	buttonText?: string;
	onButtonClick?: () => void;
	className?: string;
}

function PricingCard({
	title,
	price,
	description,
	features,
	isPopular = false,
	buttonText = "Choisir ce plan",
	onButtonClick,
	className
}: PricingCardProps) {
	return (
		<div className={cn(
			"relative rounded-2xl border bg-white dark:bg-slate-900 p-8 shadow-sm transition-all hover:shadow-lg",
			isPopular && "border-blue-500 ring-2 ring-blue-500/20",
			className
		)}>
			{isPopular && (
				<div className="absolute -top-3 left-1/2 -translate-x-1/2">
					<Badge className="bg-blue-500 text-white">
						Le plus populaire
					</Badge>
				</div>
			)}
			
			<div className="text-center">
				<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
					{title}
				</h3>
				
				<div className="mb-4">
					<span className="text-4xl font-bold text-slate-900 dark:text-white">
						{price}
					</span>
				</div>
				
				{description && (
					<p className="text-slate-600 dark:text-slate-300 mb-6">
						{description}
					</p>
				)}
			</div>
			
			<ul className="space-y-3 mb-8">
				{features.map((feature, index) => (
					<li key={index} className="flex items-start gap-3">
						<CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
						<span className="text-slate-700 dark:text-slate-300 text-sm">
							{feature}
						</span>
					</li>
				))}
			</ul>
			
			<button
				onClick={onButtonClick}
				className={cn(
					"w-full py-3 px-4 rounded-lg font-semibold transition-colors",
					isPopular
						? "bg-blue-600 text-white hover:bg-blue-700"
						: "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
				)}
			>
				{buttonText}
			</button>
		</div>
	);
}

export {
	PricingTable,
	PricingTableHeader,
	PricingTableBody,
	PricingTableHead,
	PricingTableRow,
	PricingTableCell,
	PricingTableCaption,
	PricingCard,
};
