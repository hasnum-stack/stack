import Vue from 'vue';
import Component from 'vue-class-component';
interface pagesConfig {
    page: number;
    per_page: number;
    total: number;
}
@Component
export class Pages extends Vue {
    public pagesConfig: pagesConfig = {
        page: 1,
        per_page: 10,
        total: 1,
    };
    /**
     * initPages
     */
    public initPages(): void {
        this.pagesConfig.page = 1;
    }
    /**
     * ReCalcPage
     */
    public ReCalcPage(): void {
        let { page, per_page, total } = this.pagesConfig;
        const totalPage = Math.ceil((total - 1) / per_page); // 总页数
        let currentPage = page > totalPage ? totalPage : page;
        this.pagesConfig.page = currentPage < 1 ? 1 : currentPage;
    }
}
