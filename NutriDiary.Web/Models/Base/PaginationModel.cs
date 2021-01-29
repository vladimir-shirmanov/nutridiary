using System;
using System.Collections.Generic;

namespace NutriDiary.Web.Models.Base
{
    public class PaginationModel<T>
    {
        public int Page { get; set; }

        public int PageSize { get; set; }

        public int Count { get; set; }

        public Uri NextPage { get; set; }

        public Uri PrevPage { get; set; }

        public List<T> Items { get; set; }
    }
}