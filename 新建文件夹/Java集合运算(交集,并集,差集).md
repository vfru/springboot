public class SetOpt {

    public List intersect(List ls, List ls2) {
        List list = new ArrayList(Arrays.asList(new Object[ls.size()]));
        Collections.copy(list, ls);
        list.retainAll(ls2);
        return list;
    }

    public List union(List ls, List ls2) {
        List list = new ArrayList(Arrays.asList(new Object[ls.size()]));
        Collections.copy(list, ls);
        list.addAll(ls2);
        return list;
    }

    public List diff(List ls, List ls2) {
        List list = new ArrayList(Arrays.asList(new Object[ls.size()]));
        Collections.copy(list, ls);
        list.removeAll(ls2);
        return list;
    }
    public static void main(String[] args) {
        SetOpt opt = new SetOpt();
        List l1 = new ArrayList();
        l1.add(1);
        l1.add(2);
        l1.add(3);
        l1.add(4);
        List l2 = new ArrayList();
        l2.add(3);
        l2.add(4);
        l2.add(5);
        l2.add(6);
        List intersectList = opt.intersect(l1, l2);
        System.out.println("交集：");
        for (int i = 0; i < intersectList.size(); i++) {
            System.out.print(intersectList.get(i) + " ");
        }
        System.out.println();
        List unionList = opt.union(l1, l2);
        System.out.println("并集：");
        for (int i = 0; i < unionList.size(); i++) {
            System.out.print(unionList.get(i) + " ");
        }
        System.out.println();
        List diffList = opt.diff(l1, l2);
        System.out.println("差集：");
        for (int i = 0; i < diffList.size(); i++) {
            System.out.print(diffList.get(i) + " ");
        }
        System.out.println();
    }

}

测试结果：

交集： 3 4 并集： 1 2 3 4 3 4 5 6 差集： 1 2



--------------------------------------------------------------------------------------------------------------------------------



多集合的交集：

public List<Integer> retainAllList(List<List<Integer>> allList)
{ List<Integer> listTempA = new ArrayList<Integer>(); for(int i=0;i<allList.size();i++)
{ listTempA = allList.get(i); for(List<Integer> listTempB:allList)
{ listTempA.retainAll(listTempB); }

} return listTempA; }

注意：在进行两个集合（操作集合和被操作集合）交、并、差操作时，一定要先将操作集合拷贝一份，以拷贝的集合作为操作集合来进行运算。否则，将改变原来操作集合的内容。
