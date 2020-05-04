1. Expose API routes for:
* Create Category - DONE
* Update Category - DONE
* Return ALL Categories - DONE
* Delete Category - DONE

1.1 API ROUTES Products
* Search for Products by name >>> Product[]
* Fix Cookies expire date >>> 24 Hours - DONE

2. Add Seeds for DB for:
* 1 Admin & 1 Normal user - DONE 
* 6 Products with valid data - DONE
* Categories & Subcategories - DONE

3. Add Unit Tests
* For everything

=============================================================
                BACKEND - RESPONSE STANDARD
=============================================================
Success:
{
    data: []
    message: ''
}

Error form validation:
{
    errors: []
    message: ''
}

Error (example: user not found):
{
    message: ''
}
