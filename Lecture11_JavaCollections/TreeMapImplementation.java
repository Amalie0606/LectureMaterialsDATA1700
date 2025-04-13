import java.util.TreeMap;

public class TreeMapImplementation {

    public static void main(String[] args) {

        TreeMap<Integer, String> treeMap = new TreeMap<>();

        treeMap.put(1, "A");
        treeMap.put(2, "B");
        treeMap.put(4, "D");
        treeMap.put(3, "C");

        System.out.println(treeMap);

        for (Integer key : treeMap.keySet()) {
            System.out.println(key + " : " + treeMap.get(key));
        }

//        TreeMap<String, Integer> treeMap = new TreeMap<>();
//
//// Adding elements to the TreeMap
//        treeMap.put("Apple", 1);
//        treeMap.put("Banana", 3);
//        treeMap.put("Cherry", 2);
//        treeMap.put("App", 4);
//
//        System.out.println(treeMap);
//
//
//        System.out.println("Value associated with 'Apple': " + treeMap.get("Apple"));
//
//
//        for (String key : treeMap.keySet()) {
//            System.out.println("Key: " + key + ", Value: " + treeMap.get(key));
//        }
//
//// Removing an element
//        treeMap.remove("Banana");
//
//// Checking the first and last keys
//        System.out.println("First Key: " + treeMap.firstKey()); // Output: Apple
//        System.out.println("Last Key: " + treeMap.lastKey());   // Output: Cherry
//
//        System.out.println(treeMap);



    }
}

// How To - Tree View W3Schools: https://www.w3schools.com/howto/howto_js_treeview.asp

/*
* Resources: Lecture 11 - Generic Datatypes and Java Collections:
• https://www.javatpoint.com/difference-between-abstract-class-and-interface
• https://docs.oracle.com/javase/10/docs/api/java/util/ArrayDeque.html
• https://docs.oracle.com/javase/6/docs/api/java/util/PriorityQueue.html
• https://docs.oracle.com/javase/8/docs/api/java/util/HashSet.html
• https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html
• https://docs.oracle.com/javase/8/docs/api/java/util/TreeMap.html
 */
