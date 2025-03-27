import java.util.LinkedList;
import java.util.Queue;

public class QueueImplementation {

    public static void main(String[] args) {

        Queue<Integer> queue = new LinkedList<>();

        queue.add(1);
        queue.add(2);
        queue.add(3);

        System.out.println(queue.poll());

        queue.offer(4);

        //queue.push(5);

        System.out.println(queue);

    }

}

// Same as lik above: DSA Queues W3Schools: https://www.w3schools.com/dsa/dsa_data_queues.php
