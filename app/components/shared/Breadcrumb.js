import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumb = () => {
    const router = useRouter();
    const [items, setItems] = useState([]);
    
    const generateBreadcrumbs = () => {
        // Remove any query parameters, as those aren't included in breadcrumbs
        const asPathWithoutQuery = router.asPath.split("?")[0];

        // Break down the path between "/"s, removing empty entities
        // Ex:"/my/nested/path" --> ["my", "nested", "path"]
        const asPathNestedRoutes = asPathWithoutQuery.split("/")
            .filter(v => v.length > 0);

        // Iterate over the list of nested route parts and build
        // a "crumb" object for each one.
        const crumbList = asPathNestedRoutes.map((subpath, idx) => {
            // We can get the partial nested route for the crumb
            // by joining together the path parts up to this point.
            const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
            // The title will just be the route string for now
            const label = subpath;
            return { href, label };
        })

        // Add in a default "Home" crumb for the top-level
        return [{ href: "/", label: "Home" }, ...crumbList];
    }

    useEffect(() => {
        setItems(generateBreadcrumbs())
    }, [router]);

    return (
        <div className="text-color">
            {items.map((item, index) => (
                <span className="capitalize" key={index}>
                    {items.length - 1 !== index ? (
                        <>
                            <Link href={item.href}><a href={item.href}>{item.label}</a></Link>
                            <span className="mx-2">/</span>
                        </>
                    ) : (
                        <span className="text-title">{item.label}</span>
                    )}
                </span>
            ))}
        </div>
    )
}

export default Breadcrumb