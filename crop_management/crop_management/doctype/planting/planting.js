// Copyright (c) 2025, Oscar and contributors
// For license information, please see license.txt

frappe.ui.form.on("Planting", {
    refresh(frm) {
        ["number_of_beds", "bed_length", "bed_width", "estimated_put", "cost_put"].forEach(field => {
        frm.toggle_enable(field, !!frm.doc.planting_method);
        });
    },

    planting_method(frm) {
        ["number_of_beds", "bed_length", "bed_width", "estimated_put", "cost_put"].forEach(field => {
            frm.toggle_enable(field, false);
        });

        // Then show the relevant ones
        if (frm.doc.planting_method === "Planted in bed") {
            ["number_of_beds", "bed_length", "bed_width"].forEach(field => {
                frm.toggle_enable(field, true);
            });
        }

        if (frm.doc.planting_method === "Row Crop") {
            ["estimated_put", "cost_put"].forEach(field => {
                frm.toggle_enable(field, true);
            });
        }
    }
});
